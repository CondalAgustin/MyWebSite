import "./Projects.css";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ModalGlass from "../components/ModalGlass/ModalGlass";
import { projects } from "../data/projectsData";
import type { ProjectData } from "../data/projectsData";


export default function Projects() {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    return (
        <div className="projects-background">
            <div className="falling-glow"></div>

            <div className="projects-wrapper">
                <h2 className="projects-title">My projects</h2>

                <div className="projects-list">
                    {projects.map((p, i) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, { amount: 0.3 });

                        return (
                            <motion.div
                                key={p.id}
                                ref={ref}
                                className="project-card clean-card"
                                animate={{
                                    opacity: isInView ? 1 : 0,
                                    y: isInView ? 0 : 40,
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: i * 0.15,
                                }}
                            >
                                <div className="clean-card">
                                    <img src={p.icon} alt="icon" className="project-icon" />
                                </div>

                                <div className="card-content">
                                    <h3>{p.title}</h3>
                                    <p>{p.shortDesc}</p>

                                    <button
                                        className="see-more"
                                        onClick={() => {
                                            setSelectedProject(p);
                                            setOpen(true);
                                        }}
                                    >
                                        Ver más →
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* MODAL ÚNICO */}
            {selectedProject && (
                <ModalGlass
                    open={open}
                    onClose={() => setOpen(false)}
                    title={selectedProject.title}
                    longDescription={selectedProject.longDescription}
                    stack={selectedProject.stack}
                    features={selectedProject.features}
                    link={selectedProject.link}
                    status={selectedProject.status}
                />
            )}
        </div>
    );
}
