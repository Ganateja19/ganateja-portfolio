"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skills } from "@/lib/data";

const Skills = () => {
    return (
        <SectionWrapper id="skills">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 text-center mb-16">
                Technical Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {Object.entries(skills).map(([category, items]: [string, any[]], idx: number) => (
                    <motion.div 
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all duration-300 backdrop-blur-sm group"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                {/* Decorator icon block */}
                                <div className="w-2.5 h-2.5 rounded-sm bg-blue-400" />
                            </span>
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                            {items.map((skill: string) => (
                                <div
                                    key={skill}
                                    className="px-3.5 py-1.5 bg-black/40 border border-white/10 rounded-lg text-sm text-gray-300 font-medium hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
