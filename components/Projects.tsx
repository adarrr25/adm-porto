"use client";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Frontend",
        description: "Toko online modern dengan performa tinggi, fitur keranjang belanja real-time, dan integrasi payment gateway.",
        tech: ["Next.js", "Tailwind CSS", "Zustand"],
        github: "https://github.com",
        demo: "https://example.com",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    },
    {
        title: "Dashboard Analytics",
        description: "Admin panel interaktif dengan visualisasi data yang kompleks menggunakan chart dinamis.",
        tech: ["React", "Recharts", "Framer Motion"],
        github: "https://github.com",
        demo: "https://example.com",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
        title: "SaaS Landing Page",
        description: "Halaman pendaratan dengan konversi tinggi untuk startup teknologi, difokuskan pada SEO dan aksesibilitas.",
        tech: ["Next.js", "TypeScript", "GSAP"],
        github: "https://github.com",
        demo: "https://example.com",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
];

const tiltOptions = {
    reverse: false,
    max: 10,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
};

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Featured <span className="text-[var(--color-primary)]">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full shadow-[0_0_10px_var(--color-primary)]"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Tilt options={tiltOptions} className="h-full">
                                <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col group border-t border-[rgba(255,255,255,0.1)]">
                                    {/* Image Container */}
                                    <div className="relative h-48 overflow-hidden">
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 mb-6 flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] border border-[var(--color-secondary)]/30">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex items-center gap-4 border-t border-white/10 pt-4 mt-auto">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:scale-110 transition-all flex items-center gap-2 text-sm font-medium">
                                                <Github size={18} /> Code
                                            </a>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:text-white hover:scale-110 transition-all flex items-center gap-2 text-sm font-medium ml-auto">
                                                <ExternalLink size={18} /> Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
