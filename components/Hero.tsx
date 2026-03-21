"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, TerminalSquare } from "lucide-react";
import { personalData } from "@/lib/data";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

const Hero = () => {
    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Animated Gradients */}
            <div className="absolute inset-0 bg-[#030712] -z-20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

            <SectionWrapper className="z-10 w-full">
                <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-blue-300 text-sm font-medium tracking-wide mb-2"
                    >
                        <TerminalSquare className="w-4 h-4" />
                        Available for new opportunities
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500"
                    >
                        {personalData.name}
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl md:text-5xl text-blue-400 font-bold tracking-tight"
                    >
                        {personalData.role}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed font-light mt-4"
                    >
                        {personalData.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-5 mt-6 w-full sm:w-auto px-4 sm:px-0"
                    >
                        <Link
                            href="#projects"
                            className="group relative flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            View Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="./resume.pdf"
                            download
                            className="group flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-md hover:-translate-y-1"
                        >
                            Download Resume
                            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Hero;
