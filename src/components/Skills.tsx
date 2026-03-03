"use client";

import { BentoCard, SectionHeader } from "./Structural";
import { Code2, Server, Smartphone, Database, Terminal, Cpu } from "lucide-react";

const skills = [
    {
        category: "Languages",
        icon: Code2,
        items: ["C++", "C#", "Java", "JavaScript", "Python"],
        color: "text-blue-400",
    },
    {
        category: "Backend",
        icon: Server,
        items: ["Node.js", "Express", "REST APIs", "Docker", "CI/CD"],
        color: "text-emerald-400",
    },
    {
        category: "Frontend",
        icon: Smartphone,
        items: ["React", "React Native", "Next.js", "AngularJS"],
        color: "text-purple-400",
    },
    {
        category: "Databases",
        icon: Database,
        items: ["SQL Server", "MongoDB", "Redis", "PostgreSQL"],
        color: "text-amber-400",
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-24 container px-6">
            <SectionHeader
                title="Technical Expertise"
                subtitle="Bridging the gap between complex algorithms and scalable backend architecture."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <BentoCard
                        key={skill.category}
                        title={skill.category}
                        icon={skill.icon}
                    >
                        <div className="flex flex-wrap gap-2">
                            {skill.items.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-sm text-muted-foreground hover:text-white hover:border-white/20 transition-all"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </BentoCard>
                ))}
            </div>
        </section>
    );
}
