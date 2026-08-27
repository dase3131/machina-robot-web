import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import {
  useRef,
  useState,
  useEffect,
  ReactNode,
  MouseEvent as ReactMouseEvent,
} from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Easing — one curve for the whole site. Slow out, no bounce.         */
/* ------------------------------------------------------------------ */
export const EASE = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------ */
/* Reveal — generic scroll-triggered entrance                          */
/* ------------------------------------------------------------------ */
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.9,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* MaskedLines — display type that slides up from behind a mask        */
/* ------------------------------------------------------------------ */
interface MaskedLinesProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  /** play on mount instead of on scroll */
  immediate?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "div";
}

export function MaskedLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.08,
  immediate = false,
  as = "div",
}: MaskedLinesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px -12% 0px" });
  const active = immediate || inView;
  const Tag = as as React.ElementType;

  return (
    <Tag ref={ref as never} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={cn("block will-change-transform", lineClassName)}
            initial={{ y: "110%" }}
            animate={active ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 1.05,
              delay: delay + i * stagger,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* WordReveal — body copy that fades in word by word on scroll         */
/* ------------------------------------------------------------------ */
export function WordReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0.12 }}
          animate={inView ? { opacity: 1 } : { opacity: 0.12 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.022,
            ease: "easeOut",
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Magnetic — cursor-attracted wrapper for CTAs                        */
/* ------------------------------------------------------------------ */
export function Magnetic({
  children,
  className,
  strength = 0.28,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 18, mass: 0.4 });

  const handleMove = (e: ReactMouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/* Rule — animated hairline divider that draws itself in               */
/* ------------------------------------------------------------------ */
export function Rule({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={cn("h-px w-full origin-left bg-foreground/15", className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Counter — number that counts up when scrolled into view             */
/* ------------------------------------------------------------------ */
export function Counter({
  value,
  suffix = "",
  className,
  duration = 1600,
}: {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* ScrollMarquee — infinite strip whose speed reacts to scroll         */
/* ------------------------------------------------------------------ */
export function ScrollMarquee({
  children,
  baseSpeed = 28,
  className,
}: {
  children: ReactNode;
  baseSpeed?: number;
  className?: string;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 320,
  });
  const velocityFactor = useTransform(smoothVelocity, [-1200, 0, 1200], [-4, 0, 4], {
    clamp: false,
  });

  const directionRef = useRef(1);
  useMotionValueEvent(velocityFactor, "change", (latest) => {
    if (latest < 0) directionRef.current = -1;
    else if (latest > 0) directionRef.current = 1;
  });

  useAnimationFrame((_t, delta) => {
    let move = directionRef.current * baseSpeed * (delta / 1000);
    move += directionRef.current * move * Math.abs(velocityFactor.get());
    let next = baseX.get() - move;
    // wrap between 0 and -50%
    if (next <= -50) next += 50;
    if (next > 0) next -= 50;
    baseX.set(next);
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div style={{ x }} className="flex w-max">
        {children}
        {children}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* useParallax — small helper for layered depth                        */
/* ------------------------------------------------------------------ */
export function useParallax(distance = 60): {
  ref: React.RefObject<HTMLDivElement>;
  y: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return { ref, y };
}
