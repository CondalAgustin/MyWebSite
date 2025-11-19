import { motion } from "framer-motion";
import React from "react";
import styles from "./BackgroundParticles.module.css"; // Necesitarás crear este CSS

const BackgroundParticles: React.FC = () => {
  const particles = Array.from({ length: 50 }); // Aumenté la cantidad para mejor efecto

  return (
    <div className={styles.particlesContainer}>
      {particles.map((_, i) => {
        const size = Math.random() * 10 + 6;
        const xStart = Math.random() * 100;
        const duration = Math.random() * 12 + 8;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={i}
            className={styles.particle}
            initial={{
              x: `${xStart}vw`,
              y: `-${size}px`,
              opacity: 0,
            }}
            animate={{
              y: `100vh`,
              x: `${xStart + (Math.random() * 20 - 10)}vw`,
              opacity: [0, 1, 0.8, 0],
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              //backgroundColor: `hsl(${Math.random() * 360}, 80%, 70%)`,
              backgroundColor: `hsl(${Math.random() * 360}, ${50 + Math.random() * 50}%, ${30 + Math.random() * 40}%)`,
              position: "absolute",
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundParticles;