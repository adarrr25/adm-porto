"use client";

import { motion } from "framer-motion";
import { Mail, Github, MessageCircle } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative z-10 bg-black/40 border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Get In <span className="text-[var(--color-primary)]">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full shadow-[0_0_10px_var(--color-primary)]"></div>
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
                        Tertarik untuk bekerja sama atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui platform di bawah ini.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
                    <motion.a
                        href="mailto:adarrr.04@gmail.com"
                        whileHover={{ y: -5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-4 glass px-8 py-6 rounded-2xl md:min-w-[280px] group border border-transparent hover:border-[var(--color-primary)]/50 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-black transition-colors">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 font-medium">Email</p>
                            <p className="text-white font-bold">adarrr.04@gmail.com</p>
                        </div>
                    </motion.a>

                    <motion.a
                        href="https://github.com/AdamMohammed"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-4 glass px-8 py-6 rounded-2xl md:min-w-[280px] group border border-transparent hover:border-gray-500/50 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                            <Github size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 font-medium">GitHub</p>
                            <p className="text-white font-bold">AdamMohammed</p>
                        </div>
                    </motion.a>

                    <motion.a
                        href="https://wa.me/62813"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-4 glass px-8 py-6 rounded-2xl md:min-w-[280px] group border border-transparent hover:border-green-500/50 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-colors">
                            <MessageCircle size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 font-medium">WhatsApp</p>
                            <p className="text-white font-bold">0813</p>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
