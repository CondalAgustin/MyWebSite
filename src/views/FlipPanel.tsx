 import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Card3D from "./Card3D";

export default function FlipPanel() {
  const [isBack, setIsBack] = useState(false);

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } }
  ) => {
    const offsetX = info.offset.x;

    if (offsetX > 80) setIsBack(true);
    else if (offsetX < -80) setIsBack(false);
  };

  return (
    <div
      className="relative w-[400px] h-[250px] mx-auto mt-24"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full h-full relative"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        animate={{ rotateY: isBack ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          cursor: "grab",
        }}
        whileHover={{ rotateX: isBack ? 0 : -5 }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 bg-blue-500 text-white rounded-xl shadow-xl"
          style={{
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Hero />
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 bg-white text-black rounded-xl shadow-xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Card3D />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
