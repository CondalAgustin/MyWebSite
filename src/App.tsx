import CardFlip from "./views/FlipCard";
import Projects from "./views/Projects";
import BackgroundParticles from "./components/BackgroundParticles";

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
    </>
  );
}

export default App;
