import { useState } from "react";
import { motion } from "framer-motion";
import "./CardFlip.css";
import Hero from "./Hero";
import Card3D from "./Card3D";

export default function CardFlip() {
  const [flipped, setFlipped] = useState(false);

   return (
    <div className="flip-wrapper">
      <div className="flip-container" onClick={() => setFlipped(!flipped)}>
        <motion.div
          className="flip-inner"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* FRONT */}
          <div className="flip-face flip-front">
            <Hero />
          </div>

          {/* BACK */}
          <div className="flip-face flip-back">
            <Card3D />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

 
