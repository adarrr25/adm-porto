"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

function AnimatedSphere() {
    return (
        <Sphere visible args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
                color="#8A2BE2"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.2}
            />
        </Sphere>
    );
}

export default function Hero3D() {
    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 2, 5]} intensity={1} />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <AnimatedSphere />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            {/* Content */}
            <div className="z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 tracking-tight">
                        Hi, I&apos;m <span className="text-[var(--color-primary)] neon-text-primary">Adam Mohammed</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-medium">
                        Frontend Developer | Next.js Developer
                    </h2>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects"
                        className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] uppercase tracking-wider font-bold text-white shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(138,43,226,0.6)] transition-shadow duration-300"
                    >
                        View Projects
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
