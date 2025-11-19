import { motion } from "framer-motion";
import styles from "./Hero.module.css";


export default function Hero() {
    return (
        <div>

            <section className={styles.hero}>


                {/* Fondo con blobs neon */}
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
                <div className={styles.blob3}></div>

                <div className={styles.content}>
                    {/* Nombre */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className={styles.title}
                    >
                        Agustín Nicolás Condal
                    </motion.h1>

                    {/* Rol */}
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
                        className={styles.subtitle}
                    >
                        Full Stack Developer
                    </motion.h2>

                    {/* Frase */}
                    <motion.blockquote
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
                        className={styles.quote}
                    >
                        <sub><i>“We’ve all got both light and dark inside us.
                            What matters is the part we choose to act on.”</i></sub>

                    </motion.blockquote>
                </div>
            </section>
        </div>
    );
}
