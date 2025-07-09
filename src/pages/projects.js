import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setProjects([
                {
                    id: 1,
                    title: "React Portfolio Website",
                    description: "A personal portfolio built with React and React Router.",
                    extra: "Deployed with Netlify. Fully responsive.",
                    tech: ["Kotlin" , "React", "React Router", "Tailwind CSS"],
                    github: "https://github.com/jaymaina-8/react-portfolio.git",
                    image: "/MaterialTailwind.webp",
                },
                {
                    id: 2,
                    title: "Transportation Company App",
                    description: "This a user-friendly transportation booking app built using Kotlin for Android",
                    extra: "Lightweight and mobile-first UI.",
                    tech: ["kotlin", "Android Studio", "Firebase", "SQLite", ""],
                    github: "https://github.com/jaymaina-8/Transporting-Company-App.git",
                    image: "/transportation-websites-templates-1000x750.webp",
                },
                {
                    id: 3,
                    title: "Student Management System",
                    description: "This is a student management system built using React and Tailwind CSS.",
                    extra: "Animated icons + geolocation support.",
                    tech: ["React", "API", "React Router", "Tailwind CSS"],
                    github: "https://github.com/jaymaina-8/AddStudent_App.git",
                    image: "/website-template-62651.webp",
                },
            ]);
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            {loading ? (
                <p className="loading-text">Loading projects...</p>
            ) : (
                <div className="projects-container">
                    {projects.map((proj, i) => (
                        <motion.div
                            key={proj.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="img-wrapper">
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="project-img"
                                />
                                <div className="overlay">
                                    <p>{proj.extra}</p>
                                </div>
                            </div>

                            <h3>{proj.title}</h3>
                            <p className="description">{proj.description}</p>

                            <div className="tech-stack">
                                {proj.tech.map((t, i) => (
                                    <span className="tech-tag" key={i}>{t}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                {proj.github && (
                                    <a href={proj.github} target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                )}
                                {proj.live && (
                                    <a href={proj.live} target="_blank" rel="noopener noreferrer">
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Projects;
