import Spline from "@splinetool/react-spline";
import { useRef, useState, useCallback, useEffect } from "react";

// ─── CONFIG ────────────────────────────────────────────────────────
const SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
// ───────────────────────────────────────────────────────────────────

type RobotState = "idle" | "wave" | "holdLogo";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SplineObj = any;

interface Rig {
  arms: SplineObj[];
  forearms: SplineObj[];
  hands: SplineObj[];
  head?: SplineObj;
  body?: SplineObj;
}

interface Pose {
  x: number;
  y: number;
  z: number;
}

const DEG = Math.PI / 180;

interface SplineRobotProps {
  className?: string;
}

export default function SplineRobot({ className }: SplineRobotProps) {
  const splineRef = useRef<SplineObj>(null);
  const rigRef = useRef<Rig | null>(null);
  const baseRef = useRef<Map<SplineObj, Pose>>(new Map());
  const stateRef = useRef<RobotState>("holdLogo");
  const rafRef = useRef<number>();
  const startRef = useRef<number>(0);

  const [loaded, setLoaded] = useState(false);

  const onLoad = useCallback((spline: SplineObj) => {
    splineRef.current = spline;

    const objs: SplineObj[] = spline.getAllObjects();
    const pick = (re: RegExp) => objs.filter((o) => re.test(o.name));

    const rig: Rig = {
      arms: pick(/^arm$/i),
      forearms: pick(/^forearm$/i),
      hands: pick(/^Hand$/i),
      head: objs.find((o) => /^Head$/i.test(o.name)),
      body: objs.find((o) => /^Body$/i.test(o.name)),
    };
    rigRef.current = rig;

    // Remember every rest pose so we can always return to idle
    const base = new Map<SplineObj, Pose>();
    [...rig.arms, ...rig.forearms, ...rig.hands, rig.head, rig.body]
      .filter(Boolean)
      .forEach((o: SplineObj) => {
        base.set(o, { x: o.rotation.x, y: o.rotation.y, z: o.rotation.z });
      });
    baseRef.current = base;

    console.log("RIG", rig.arms.length, rig.forearms.length, rig.hands.length, objs.map((o:any)=>o.name).join(","));
    setLoaded(true);
  }, []);

  // Single animation loop that drives the rig directly
  useEffect(() => {
    if (!loaded) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      rafRef.current = requestAnimationFrame(tick);
      const rig = rigRef.current;
      const base = baseRef.current;
      if (!rig) return;

      const t = (performance.now() - startRef.current) / 1000;
      const mode = stateRef.current;
      const ease = 0.12;

      // Target offsets (radians) relative to rest pose
      const target = new Map<SplineObj, Pose>();
      const set = (o: SplineObj | undefined, x = 0, y = 0, z = 0) => {
        if (o) target.set(o, { x, y, z });
      };

      if (mode === "idle") {
        // Gentle breathing sway
        const s = Math.sin(t * 1.4);
        rig.arms.forEach((a) => set(a, 0, 0, s * 3 * DEG));
        rig.forearms.forEach((f) => set(f, s * 2 * DEG, 0, 0));
        rig.hands.forEach((h) => set(h, 0, 0, 0));
        set(rig.head, Math.sin(t * 0.8) * 3 * DEG, Math.sin(t * 0.5) * 6 * DEG, 0);
        set(rig.body, 0, Math.sin(t * 0.4) * 2 * DEG, 0);
      } else if (mode === "wave") {
        // One arm raised, forearm + hand swinging side to side
        const swing = Math.sin(t * 6);
        rig.arms.forEach((a, i) => {
          if (i === 1) set(a, 0, 0, 120 * DEG);
          else set(a, 0, 0, 0);
        });
        rig.forearms.forEach((f, i) => {
          if (i === 1) set(f, 0, 0, swing * 25 * DEG);
          else set(f, 0, 0, 0);
        });
        rig.hands.forEach((h, i) => {
          if (i === 1) set(h, 0, 0, swing * 20 * DEG);
          else set(h, 0, 0, 0);
        });
        set(rig.head, 0, -6 * DEG, 0);
        set(rig.body, 0, 0, 0);
      } else {
        // holdLogo: both arms raised overhead, steady, tiny float
        const float = Math.sin(t * 1.6) * 2 * DEG;
        rig.arms.forEach((a, i) => {
          const dir = i === 0 ? 1 : -1;
          set(a, -100 * DEG, 0, dir * (60 * DEG + float));
        });
        rig.forearms.forEach((f, i) => {
          const dir = i === 0 ? 1 : -1;
          set(f, -20 * DEG, 0, 0);
        });
        rig.hands.forEach((h) => set(h, 0, 0, 0));
        set(rig.head, -4 * DEG, 0, 0);
        set(rig.body, 0, 0, 0);
      }

      target.forEach((off, o) => {
        const b = base.get(o);
        if (!b) return;
        o.rotation.x = lerp(o.rotation.x, b.x + off.x, ease);
        o.rotation.y = lerp(o.rotation.y, b.y + off.y, ease);
        o.rotation.z = lerp(o.rotation.z, b.z + off.z, ease);
      });
    };

    startRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loaded]);

  return (
    <div className={`relative ${className ?? ""}`}>
      <Spline scene={SCENE_URL} onLoad={onLoad} style={{ width: "100%", height: "100%" }} />

      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[11px] tracking-[0.2em] opacity-50">
          LOADING ROBOT...
        </div>
      )}

      {/* MACHINA sign held above the robot's hands */}
      {loaded && (
        <div className="pointer-events-none absolute left-1/2 top-[10%] z-20 -translate-x-1/2 animate-fade-in border-2 border-foreground bg-background px-4 py-2 md:px-6 md:py-3">
          <span className="whitespace-nowrap font-mono text-base tracking-[0.35em] md:text-2xl">MACHINA</span>
        </div>
      )}

    </div>
  );
}
