"use client";

import { BentoCard, SectionHeader } from "./Structural";
import { Briefcase, GraduationCap, Trophy, Award, User } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Experience() {
    return (
        <section id="experience" className="py-24 container px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Work Experience */}
                <div>
                    <SectionHeader title="Professional Experience" subtitle="Working at the intersection of AI and customer experience." />
                    <div className="space-y-6">
                        <BentoCard title="Software Engineer - Full-Stack Developer" icon={Briefcase}>
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-primary font-semibold">Appout ITS</h4>
                                <span className="text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded">May 2025 - Dec 2025</span>
                            </div>
                            <p className="text-white font-medium mb-3 underline underline-offset-4 decoration-primary/50">Project: RoboDesk</p>
                            <ul className="space-y-3">
                                {[
                                    "Developed and maintained RoboDesk, an AI-powered omnichannel customer experience (CX) platform for enterprises — centralizing, automating, and scaling customer support operations.",
                                    "Implemented full-stack features across frontend (AngularJs) and backend (Node.js) for a production enterprise product.",
                                    "Collaborated in an agile team environment to deliver platform improvements."
                                ].map((bullet, i) => (
                                    <li key={i} className="text-sm text-muted-foreground flex gap-3 leading-relaxed">
                                        <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </BentoCard>
                    </div>
                </div>

                {/* Achievements & Academic */}
                <div>
                    <SectionHeader title="Achievements" subtitle="Recognition for excellence in computer science and competition." />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <BentoCard title="Academic Merit" icon={GraduationCap} className="sm:col-span-2">
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-white font-semibold">Top 5 CS Graduate</p>
                                <span className="text-primary font-bold">3.84 GPA</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Ranked in the top 5 of the Computer Science graduating class, demonstrating consistent academic excellence and technical mastery.
                            </p>
                        </BentoCard>
                        <BentoCard title="Az-SCENES 1st Place" icon={Trophy} className="border-primary/20 bg-primary/5">
                            <p className="text-sm text-muted-foreground">
                                Won 1st place in the Machine Learning track for the 5G Smart City project.
                            </p>
                        </BentoCard>
                        <BentoCard title="AUC MIE Finalist" icon={Award}>
                            <p className="text-sm text-muted-foreground">
                                Qualified for the AUC MIE Competition Final among top-tier engineering projects.
                            </p>
                        </BentoCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
