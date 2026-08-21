import Spline from "@splinetool/react-spline";
import { useRef, useState, useCallback, useEffect } from "react";

// ─── CONFIG ────────────────────────────────────────────────────────
const SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
const ROBOT_NAME = "Bot"; // verified from spline.getAllObjects() console log
const LOGO_NAME = "MachinaLogo"; // not present in the current scene yet — DOM overlay is used as fallback
// ───────────────────────────────────────────────────────────────────

type RobotState = "idle" | "wave" | "holdLogo";

interface SplineRobotProps {
  className?: string;
}

export default function SplineRobot({ className }: SplineRobotProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const splineRef = useRef<any>(null);
  const [loaded, setLoaded] = useState(false);
  const [state, setState] = useState<RobotState>("idle");
  const [showOverlay, setOverlay] = useState(false);

  const onLoad = useCallback((spline: any) => {
    splineRef.current = spline;
    setLoaded(true);

    // Debug: print all object names so you can verify ROBOT_NAME and LOGO_NAME
    console.log(
      "Spline objects:",
      spline.getAllObjects().map((o: { name: string }) => o.name)
    );

    // Hide logo object on load
    const logo = spline.findObjectByName(LOGO_NAME);
    if (logo) logo.visible = false;
  }, []);

  const trigger = useCallback((nextState: RobotState) => {
    const spline = splineRef.current;
    if (!spline) return;

    const robot = spline.findObjectByName(ROBOT_NAME);
    const logo = spline.findObjectByName(LOGO_NAME);

    // Reset everything first
    if (robot) spline.emitEventReverse("mouseDown", ROBOT_NAME);
    if (logo) logo.visible = false;
    setOverlay(false);

    switch (nextState) {
      case "idle":
        // already reset above
        break;

      case "wave":
        if (robot) spline.emitEvent("mouseDown", ROBOT_NAME);
        break;

      case "holdLogo":
        if (robot) spline.emitEvent("mouseDown", ROBOT_NAME);
        // Show logo object inside Spline scene (parented to hand)
        if (logo) logo.visible = true;
        // Also show DOM overlay for extra legibility
        setOverlay(true);
        break;
    }

    setState(nextState);
  }, []);

  // Keyboard shortcuts: I = idle, W = wave, L = hold logo
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "i") trigger("idle");
      if (e.key === "w") trigger("wave");
      if (e.key === "l") trigger("holdLogo");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [trigger]);

  const buttons: { id: RobotState; label: string }[] = [
    { id: "idle", label: "Idle" },
    { id: "wave", label: "Wave" },
    { id: "holdLogo", label: "Hold Logo" },
  ];

  return (
    <div className={className} style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Spline scene */}
      <Spline scene={SCENE_URL} onLoad={onLoad} style={{ width: "100%", height: "100%" }} />

      {/* Loading state */}
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "monospace",
            fontSize: "11px",
            letterSpacing: "2px",
            opacity: 0.5,
          }}
        >
          LOADING ROBOT...
        </div>
      )}

      {/* MACHINA logo overlay — appears when robot holds it up */}
      {showOverlay && (
        <div
          style={{
            position: "absolute",
            top: "12%",
            right: "8%",
            padding: "18px 28px",
            background: "rgba(8,12,20,0.85)",
            border: "1px solid #44aaff",
            borderRadius: "6px",
            boxShadow: "0 0 24px rgba(68,170,255,0.45)",
            color: "#eaf4ff",
            fontFamily: "monospace",
            fontSize: "26px",
            letterSpacing: "6px",
            animation: "machina-fadein 0.35s ease-out",
            pointerEvents: "none",
          }}
        >
          MACHINA
        </div>
      )}

      {/* Control buttons */}
      {loaded && (
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            zIndex: 20,
          }}
        >
          {buttons.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => trigger(id)}
              style={{
                padding: "10px 22px",
                background: state === id ? "rgba(68,170,255,0.12)" : "transparent",
                border: `1px solid ${state === id ? "#44aaff" : "rgba(0,0,0,0.25)"}`,
                color: state === id ? "#44aaff" : "rgba(0,0,0,0.6)",
                fontFamily: "monospace",
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: "4px",
                transition: "all 0.2s",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @keyframes machina-fadein {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
