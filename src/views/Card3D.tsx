import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState } from "react";
import styles from "./Card3D.module.css";

export default function Card3D() {
    const rotateY = useMotionValue(0);
    const rotateX = useMotionValue(0);
    const [dragging, setDragging] = useState(false);

    // Snapping automático al soltar
    const handleDragEnd = () => {
        setDragging(false);

        const currentRotation = rotateY.get();

        if (currentRotation > 90 || currentRotation < -90) {
            // Mostrar parte trasera (snap to 180°)
            animate(rotateY, currentRotation > 0 ? 180 : -180, {
                duration: 0.5,
                ease: "easeOut",
            });
        } else {
            // Volver al frente
            animate(rotateY, 0, { duration: 0.5, ease: "easeOut" });
        }
    };

    return (
        <div className={styles.wrapper}>
            <motion.div
                className={styles.card}
                style={{
                    rotateY,
                    rotateX,
                }}
                whileHover={{ rotateX: -5, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
                {/* Cara frontal */}
                <div className={styles.front}>
                    <div className={styles.left}>
                        <img
                            src="https://i.imgur.com/3M0zC0p.png"
                            className={styles.photo}
                            alt="Foto"
                        />
                    </div>

                    <div className={styles.right}>
                        <h1 className={styles.name}>Agustín Condal</h1>
                        <h2 className={styles.role}>Full Stack Developer</h2>
                        <p className={styles.text}>
                            C#, .NET, React, SQL, AWS & Cloud Enthusiast.
                        </p>
                    </div>
                </div>

                {/* Cara trasera */}
                <div className={styles.back}>
                    <h3 className={styles.skillsTitle}>Skills</h3>

                    <img
                        src="https://skillicons.dev/icons?i=git,github,azure,vscode,aws,postman,postgres,express,mysql,figma,html,css,js,materialui&perline=14"
                        className={styles.skills}
                    />
                    <img
                        src="https://skillicons.dev/icons?i=react,redux,tailwind,ts,cpp,nodejs,cs,dotnet&perline=14"
                        className={styles.skills}
                    />
                </div>
            </motion.div>

            {/* Hint de interacción */}
            <div className={styles.hint}>👉 Arrastrá para girar</div>
        </div>
    );
}
