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
            <sub>
              <i>
                “We’ve all got both light and dark inside us. What matters is
                the part we choose to act on.”
              </i>
            </sub>
          </motion.blockquote>
        </div>

        {/* Botón flotante de contacto */}
        <motion.div
          className={`${styles.contactFloat} hero-contact-btn`}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 1 }}
          whileHover={{ scale: 1.08, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation(); // 🔥 evita que el click llegue al flip
            const target = document.getElementById("contact");
            if (!target) return;

            const start = window.scrollY;
            const end = target.getBoundingClientRect().top + window.scrollY;
            const duration = 1700;
            const startTime = performance.now();

            function animateScroll(currentTime: number) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              const ease =
                progress < 0.5
                  ? 4 * progress * progress * progress
                  : 1 - Math.pow(-2 * progress + 2, 3) / 2;

              window.scrollTo(0, start + (end - start) * ease);

              if (elapsed < duration) requestAnimationFrame(animateScroll);
            }

            requestAnimationFrame(animateScroll);
          }}
        >
          <span>Contact</span>
        </motion.div>

        {/* 💫 HINT SUTIL PARA INDICAR QUE SE PUEDE GIRAR */}
        <motion.div
          className={styles.tapHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.6, 0.2], y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Tap to flip ↻
        </motion.div>
      </section>
    </div>
  );
}
