"use client";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import Image from "next/image";

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 15,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.02,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export default function About() {
    return (
        <section id="about" className="py-24 relative z-10">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        About <span className="text-[var(--color-primary)]">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full shadow-[0_0_10px_var(--color-primary)]"></div>
                </motion.div>

                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full max-w-[280px] md:max-w-[320px] shrink-0"
                    >
                        <Tilt options={{ max: 10, scale: 1.02 }}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl blur-xl opacity-40 animate-pulse"></div>
                            <div className="w-full relative rounded-2xl p-1 bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-secondary)]">
                                <div className="w-full relative rounded-xl overflow-hidden bg-black aspect-[3/4]">
                                    <Image
                                        src="/profile.png"
                                        alt="adam mohammed - Frontend Developer"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>

                    {/* About Content */}
                    <div className="w-full">
                        <Tilt options={defaultOptions} className="h-full">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="glass-card rounded-2xl p-8 md:p-12 text-center md:text-left relative overflow-hidden group"
                            >
                                {/* Glowing Background Effect */}
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--color-secondary)] rounded-full mix-blend-screen filter blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[var(--color-primary)] rounded-full mix-blend-screen filter blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
                                        Saya adalah seorang Frontend Developer dengan fokus pada ekosistem React dan Next.js. Bersemangat dalam menciptakan antarmuka pengguna yang modern, interaktif, dan performa tinggi yang memberikan pengalaman digital luar biasa.
                                    </p>
                                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                                        Memiliki ketertarikan kuat dalam implementasi desain UI terkini, seni animasi web, dan eksplorasi grafis 3D di browser untuk meningkatkan nilai interaksi pengguna dengan produk digital.
                                    </p>
                                </div>
                            </motion.div>
                        </Tilt>
                    </div>
                </div>
            </div>
        </section>
    );
}
