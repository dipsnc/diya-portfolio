"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function FlowerCursor({ x, y }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(true);

  // 12 petals for a full sunflower look
  const petals = Array.from({ length: 12 }, (_, i) => i * (360 / 12));

  useEffect(() => {
    // Check if the device has a fine pointer (mouse/trackpad)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsFinePointer(mediaQuery.matches);

    const handleMediaChange = (e) => setIsFinePointer(e.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.closest("button") ||
        target.closest("a") ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  if (!isFinePointer) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100]"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        rotate: 360,
        scale: isClicked ? 0.7 : isHovering ? 1.2 : 1,
      }}
      transition={{
        rotate: {
          duration: isHovering ? 4 : 10,
          repeat: Infinity,
          ease: "linear",
        },
        scale: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        className="drop-shadow-md"
      >
        {/* Yellow Petals */}
        {petals.map((angle) => (
          <ellipse
            key={angle}
            cx="12"
            cy="6"
            rx="2.5"
            ry="5.5"
            fill="#eab308" // Using the accent color from index.css
            transform={`rotate(${angle} 12 12)`}
          />
        ))}
        {/* Brown Center */}
        <circle cx="12" cy="12" r="4.5" fill="#713f12" />
        {/* Subtle center texture */}
        <circle cx="12" cy="12" r="2" fill="#451a03" opacity="0.4" />
      </svg>
    </motion.div>
  );
}
