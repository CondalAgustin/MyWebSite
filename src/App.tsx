import CardFlip from "./views/FlipCard";
import Projects from "./views/Projects";
import BackgroundParticles from "./components/BackgroundParticles";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      {/* SECTION 1 - Flip con partículas */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden", // <-- CLAVE
        }}
      >
        <BackgroundParticles />
        <CardFlip />
      </section>

      {/* SECTION 2 - Proyectos sin partículas */}
      <section>
        <Projects />
      </section>

       {/* SECTION 3 - Contacto */}
      <section>
        <Contact />
      </section>
    </>
  );
}

export default App;
