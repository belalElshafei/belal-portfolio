"use client";

import { BentoCard, SectionHeader } from "./Structural";
import { ExternalLink, Github, Layers, Globe, Code2 } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    tech: string[];
    links: {
        github?: string;
        external?: string;
    };
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: "Sanaiey App",
        description: "Developed a full-stack craftsman service platform with a multi-role architecture for customers, technicians, and administrators. Engineered a dynamic bidding engine, implemented a secure OTP-based service completion workflow, and built a financial infrastructure with a digital wallet for automated commissions.",
        tech: ["React Native", "Node.js", "Express", "MongoDB", "Akedly Shield", "Docker"],
        links: {},
        featured: true,
    },
    {
        title: "RoboDesk",
        description: "Enterprise omnichannel customer support platform (Appout ITS). Centralizes and automates customer interactions across channels using AI to boost support efficiency at scale.",
        tech: ["Node.js", "Express.js", "Redis", "MongoDB", "AngularJS"],
        links: {},
        featured: false,
    },
    {
        title: "Task Management App",
        description: "Developed a full-stack task management application with a Next.js frontend and a RESTful Node.js/Express API. Implemented JWT authentication, Redis caching, and MongoDB compound indexing for performance. Containerized with Docker and integrated Sentry for observability.",
        tech: ["Next.js", "Node.js", "Express.js", "Redis", "Docker", "MongoDB"],
        links: { github: "https://github.com/belalElshafei/task-management-api" },
        featured: true,
    },
    {
        title: "5G Smart City (Graduation Project)",
        description: "The project focuses on creating a smart city infrastructure by integrating a smart home, hospital, and garage. Leveraging AI and IoT technologies, I implemented a REST API to facilitate real-time control of the smart home via a mobile app. Won 1st place in the Machine Learning track at Al-Azhar University's Az-SCENES exhibition and qualified for the AUC MIE Competition Final.",
        tech: ["Python", "Machine Learning", "Embedded Systems", "IoT"],
        links: {},
    },
    {
        title: "Programming Quizzes Mobile App",
        description: "Cross-platform mobile application delivering interactive programming quizzes, built with React Native.",
        tech: ["React Native"],
        links: { github: "https://github.com/belalElshafei/Programming-Quizzes-mobile-app" },
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24 container px-6">
            <SectionHeader
                title="Featured Projects"
                subtitle="A selection of my architectural and engineering work."
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className={project.featured ? "md:col-span-8" : "md:col-span-4"}
                    >
                        <BentoCard className="h-full flex flex-col justify-between group">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                                        {project.featured ? <Layers size={24} /> : <Code2 size={24} />}
                                    </div>
                                    <div className="flex items-center gap-3">
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-white transition-colors"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.links.external && (
                                            <a
                                                href={project.links.external}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-white transition-colors"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-6">{project.description}</p>


                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map(t => (
                                    <span key={t} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded bg-white/5 text-muted-foreground">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </BentoCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
