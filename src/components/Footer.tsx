"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer id="contact" className="py-20 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="container px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Let&apos;s build something great.</h2>
                    <p className="text-muted-foreground max-w-lg mx-auto mb-10">
                        Available for software engineering roles and collaborations on complex backend systems.
                    </p>

                    <div className="flex items-center justify-center gap-6">
                        <a
                            href="mailto:belalelshafei924@gmail.com"
                            className="p-4 rounded-2xl bg-primary text-black hover:opacity-90 transition-opacity"
                            title="Email me"
                        >
                            <Mail size={24} />
                        </a>
                        <a
                            href="https://github.com/belalelshafei"
                            target="_blank"
                            className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                            title="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="http://www.linkedin.com/in/belal-elshafei-b2613523b"
                            target="_blank"
                            className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                            title="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-10 mt-10">
                    <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Belal Elshafei. Built with Next.js & Framer Motion.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors"
                    >
                        Back to top
                        <div className="p-2 rounded-full border border-white/10 group-hover:border-primary transition-colors">
                            <ArrowUp size={14} />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
}
