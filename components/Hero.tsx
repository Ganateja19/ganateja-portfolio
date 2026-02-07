"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { personalData } from "@/lib/data";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

const Hero = () => {
    return (
        <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />

            <SectionWrapper className="z-10 text-center flex flex-col items-center gap-6">


                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
                >
                    {personalData.name}
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-3xl text-gray-400 font-medium"
                >
                    {personalData.role}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed"
                >
                    {personalData.bio}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-4 mt-8"
                >
                    <Link
                        href="#projects"
                        className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
                    >
                        View Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href="/resume.pdf"
                        download
                        className="flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-6 py-3 rounded-lg font-medium transition-all"
                    >
                        Download Resume
                        <Download className="w-4 h-4" />
                    </a>
                </motion.div>
            </SectionWrapper>
        </div>
    );
};

export default Hero;
