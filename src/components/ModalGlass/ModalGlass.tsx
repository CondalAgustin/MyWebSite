import React from "react";
import "./modalGlass.css";

export interface TechStackItem {
    name: string;
    icon: string;
}

export interface ModalGlassProps {
    open: boolean;
    onClose: () => void;
    title: string;
    longDescription: string;
    stack: TechStackItem[];
    features?: string[];
    link?: string;
    status?: string;
}

export default function ModalGlass({
    open,
    onClose,
    title,
    longDescription,
    stack = [],
    features = [],
    link,
    status
}: ModalGlassProps) {
    if (!open) return null;

    return (
        <div className="mg-overlay" onClick={onClose}>
            <div className="mg-container" onClick={(e) => e.stopPropagation()}>

                <h2 className="mg-title">{title}</h2>

                {status && <p className="mg-status">{status}</p>}
                <div className="modal-separator" />
                {/* STACK */}
                {stack.length > 0 && (
                    <div className="mg-stack">
                        {stack.map((item) => (
                            <span key={item.name} className="tech-chip">
                                <img src={item.icon} alt={item.name} />
                                {item.name}
                            </span>
                        ))}
                    </div>
                )}

                {/* DESCRIPCIÓN */}
                <p className="mg-description">{longDescription}</p>

                {/* FEATURES */}
                {features.length > 0 && (
                    <ul className="mg-features">
                        {features.map((f) => (
                            <li key={f}>{f}</li>
                        ))}
                    </ul>
                )}
                <div className="modal-separator" />
                {/* BOTÓN */}


                <div className="modal-actions">
                    {link && (
                        <a
                            className="modal-link-btn"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver Proyecto
                        </a>
                    )}

                    <button className="mg-close-btn" onClick={onClose}>
                        Cerrar
                    </button>
                </div>


            </div>
        </div>
    );
}
