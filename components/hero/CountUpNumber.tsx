"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CountUpNumberProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function CountUpNumber({ end, suffix = "", duration = 2000 }: CountUpNumberProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Ease out cubic
      const easeOutProgress = 1 - Math.pow(1 - percentage, 3);
      const currentCount = Math.floor(easeOutProgress * end);

      setCount(currentCount);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {count}
      {suffix}
    </span>
  );
}
