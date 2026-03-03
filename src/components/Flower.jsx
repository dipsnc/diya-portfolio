import { motion } from "motion/react";

export default function Flower({ size = 40 }) {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <motion.div
      className="relative flex items-center justify-center cursor-pointer"
      style={{ width: size, height: size }}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 2, ease: "linear", repeat: Infinity }}
    >
      {/* Petals */}
      {petals.map((angle, index) => (
        <div
          key={index}
          className="absolute bg-accent w-1/3 h-2/3 rounded-full opacity-90"
          style={{
            transform: `rotate(${angle}deg) translateY(-25%)`,
            transformOrigin: "bottom center",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          }}
        />
      ))}

      {/* Center */}
      <div className="absolute w-1/3 h-1/3 bg-background border-2 border-accent rounded-full z-10 shadow-inner" />
    </motion.div>
  );
}
