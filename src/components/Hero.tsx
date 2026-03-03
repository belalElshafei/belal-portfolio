"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Code2, Cpu } from "lucide-react";
import NextImage from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] animate-pulse delay-700" />

            <div className="container px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 relative inline-block"
                    >
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                            <NextImage
                                src="/profile.jpg"
                                alt="Belal Elshafei"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6"
                    >
                        <Terminal size={14} />
                        <span>Available for new opportunities</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
                    >
                        Belal Elshafei
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8"
                    >
                        Software Engineer & <span className="text-white">Back-End Developer</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Top 5 Computer Science Graduate with a 3.84 GPA. Back-End Engineer & Competitive Programmer. Expert in
                        <span className="text-white font-semibold"> C++, JavaScript, and Node.js</span>.
                        I turn complex algorithmic challenges into solutions with a focus on efficiency, reliability, and elegant system design.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 bg-primary text-black font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
                        >
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/5 pt-10"
                    >
                        <div className="flex flex-col items-center">
                            <span className="text-white text-2xl font-bold">Top 5</span>
                            <span className="text-xs text-muted-foreground uppercase tracking-widest">CS Rank</span>
                        </div>
                        <div className="flex flex-col items-center border-x border-white/5 px-8">
                            <span className="text-white text-2xl font-bold">3.84</span>
                            <span className="text-xs text-muted-foreground uppercase tracking-widest">Cumulative GPA</span>
                        </div>
                        <div className="hidden md:flex flex-col items-center">
                            <span className="text-white text-2xl font-bold">Competitive</span>
                            <span className="text-xs text-muted-foreground uppercase tracking-widest">Programmer</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Hero Animation Decorations */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}
