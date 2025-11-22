import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import styles from "./Card3D.module.css";
import logo from "../assets/icono.png";

export default function Card3D() {
  const rotateY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const shadowX = useMotionValue(0);
  const shadowY = useMotionValue(0);

  const shadow = useTransform([shadowX, shadowY], ([sx, sy]) => {
    return `${sx}px ${sy}px 35px rgba(153, 149, 149, 1)`;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    shadowX.set((x - centerX) / 20);
    shadowY.set((y - centerY) / 20);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      animate(rotateY, 360, {
        duration: 2,
        ease: "easeInOut",
        onComplete: () => rotateY.set(0), // vuelve al estado inicial
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [rotateY]);

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.card}
        onMouseMove={handleMouseMove}
        style={{
          rotateX,
          rotateY,
          boxShadow: shadow,
        }}
        whileHover={{ rotateX: -6, rotateY: 6 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        <div className={styles.front}>
          {/* IMAGEN IZQUIERDA */}
          <div className={styles.left}>
            <img src={logo} className={styles.photo} alt="Agustín" />
          </div>

          {/* TEXTO */}
          <div className={styles.right}>
            <h1 className={styles.name}>Agustín Condal</h1>
            <h2 className={styles.role}>Full Stack Developer</h2>

            <p className={styles.description}>
              Experienced developer in .NET, C#, SQL, React, and AWS.
              Passionate about creating modern interfaces, robust APIs, and
              experiences that feel professional and seamless.
            </p>

            <div className={styles.skillsBox}>
              <h3 className={styles.skillsTitle}>Skills</h3>

              <div className={styles.skillsImgs}>
                <img src="https://skillicons.dev/icons?i=git,github,azure,vscode,aws,postman,postgres,express,mysql,figma,html,css,js,materialui,react,redux,tailwind,ts,cpp,nodejs,cs,dotnet&perline=12" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}