"use client";

import { motion } from "framer-motion";
import { Code2, MonitorPlay, Component, Globe, Smartphone, Zap } from "lucide-react";

const skills = [
    { name: "Next.js", icon: <Globe size={32} />, level: 90 },
    { name: "React", icon: <Component size={32} />, level: 95 },
    { name: "TypeScript", icon: <Code2 size={32} />, level: 85 },
    { name: "Tailwind CSS", icon: <MonitorPlay size={32} />, level: 90 },
    { name: "Framer Motion", icon: <Zap size={32} />, level: 80 },
    { name: "Responsive Design", icon: <Smartphone size={32} />, level: 95 },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative z-10 bg-black/30">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        My <span className="text-[var(--color-primary)]">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full shadow-[0_0_10px_var(--color-primary)]"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="glass p-6 rounded-2xl flex flex-col items-center justify-center neon-box-primary group transition-all duration-300"
                        >
                            <div className="text-[var(--color-primary)] mb-4 group-hover:neon-text-primary transition-all duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{skill.name}</h3>
                            <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-2.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
