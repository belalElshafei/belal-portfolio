"use client";

import { motion } from "framer-motion";
import { Code2, Server, Smartphone, Database, Trophy, Briefcase, GraduationCap } from "lucide-react";

export function SectionHeader({ title, subtitle, id }: { title: string; subtitle?: string; id?: string }) {
    return (
        <div className="mb-12" id={id}>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-muted-foreground text-lg max-w-2xl"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}

export function BentoCard({
    children,
    className,
    title,
    icon: Icon
}: {
    children: React.ReactNode;
    className?: string;
    title?: string;
    icon?: any;
}) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-6 rounded-3xl glass hover:border-primary/50 transition-colors ${className}`}
        >
            {title && (
                <div className="flex items-center gap-3 mb-4">
                    {Icon && <div className="p-2 rounded-lg bg-primary/10 text-primary"><Icon size={20} /></div>}
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
            )}
            {children}
        </motion.div>
    );
}
