import Spline from "@splinetool/react-spline";
import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── CONFIG ────────────────────────────────────────────────────────
const SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
const ROBOT_NAME = "Bot";
const LOGO_NAME = "MachinaLogo"; // optional in-scene object; DOM overlay is the fallback
// ───────────────────────────────────────────────────────────────────

type RobotState = "idle" | "wave" | "holdLogo";

interface SplineRobotProps {
  className?: string;
}

const STATES: { id: RobotState; label: string; key: string }[] = [
  { id: "idle", label: "Idle", key: "I" },
  { id: "wave", label: "Wave", key: "W" },
  { id: "holdLogo", label: "Sign", key: "L" },
];

export default function SplineRobot({ className }: SplineRobotProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const splineRef = useRef<any>(null);
  const [loaded, setLoaded] = useState(false);
  const [state, setState] = useState<RobotState>("idle");
  const [showOverlay, setOverlay] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onLoad = useCallback((spline: any) => {
    splineRef.current = spline;
    setLoaded(true);
    const logo = spline.findObjectByName(LOGO_NAME);
    if (logo) logo.visible = false;
  }, []);

  const trigger = useCallback((nextState: RobotState) => {
    const spline = splineRef.current;
    if (!spline) return;

    const robot = spline.findObjectByName(ROBOT_NAME);
    const logo = spline.findObjectByName(LOGO_NAME);

    if (robot) spline.emitEventReverse("mouseDown", ROBOT_NAME);
    if (logo) logo.visible = false;
    setOverlay(false);

    switch (nextState) {
      case "idle":
        break;
      case "wave":
        if (robot) spline.emitEvent("mouseDown", ROBOT_NAME);
        break;
      case "holdLogo":
        if (robot) spline.emitEvent("mouseDown", ROBOT_NAME);
        if (logo) logo.visible = true;
        setOverlay(true);
        break;
    }

    setState(nextState);
  }, []);

  // Keyboard shortcuts: I / W / L
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && /INPUT|TEXTAREA|SELECT/.test(target.tagName)) return;
      const k = e.key.toLowerCase();
      if (k === "i") trigger("idle");
      if (k === "w") trigger("wave");
      if (k === "l") trigger("holdLogo");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [trigger]);

  return (
    <div className={`relative ${className ?? ""}`}>
      <Spline
        scene={SCENE_URL}
        onLoad={onLoad}
        style={{ width: "100%", height: "100%" }}
      />

      {/* Loading state */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <span className="label animate-pulse">Loading</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MACHINA sign overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute right-[6%] top-[10%] border border-foreground bg-background px-5 py-3"
          >
            <span className="font-mono text-lg uppercase tracking-[0.35em]">
              Machina
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls — hairline, monochrome, editorial */}
      {loaded && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-0 left-0 z-20 flex items-stretch border-t border-foreground/20"
        >
          {STATES.map(({ id, label, key }) => (
            <button
              key={id}
              onClick={() => trigger(id)}
              aria-pressed={state === id}
              className={`group flex items-center gap-2 border-r border-foreground/20 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                state === id
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
              <span
                className={`text-[9px] ${
                  state === id ? "text-background/50" : "text-muted-foreground/50"
                }`}
              >
                {key}
              </span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
