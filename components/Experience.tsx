"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { experience } from "@/lib/data";

const Experience = () => {
    return (
        <SectionWrapper id="experience">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 text-center mb-16">
                Work Experience
            </h2>
            <div className="max-w-4xl mx-auto">
                <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-10 pb-4 before:absolute before:inset-y-0 before:-left-px before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-blue-500/50 before:to-transparent">
                    {experience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative pl-8 md:pl-12 group"
                        >
                            {/* Glowing Timeline Node */}
                            <div className="absolute top-5 -left-[5px] w-2.5 h-2.5 rounded-full bg-blue-400 ring-4 ring-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.8)] group-hover:ring-blue-500/40 group-hover:bg-blue-300 transition-all duration-300 z-10" />
                            
                            {/* Glassmorphism Card */}
                            <div className="relative overflow-hidden bg-white/5 hover:bg-white/[0.07] border border-white/10 hover:border-blue-500/30 rounded-2xl p-6 md:p-8 transition-all duration-300 backdrop-blur-sm group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
                                {/* Subtle internal gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between mb-1 gap-4">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 tracking-tight">
                                            {item.role}
                                        </h3>
                                        <div className="text-lg md:text-xl text-gray-400 font-medium mt-1">
                                            {item.company}
                                        </div>
                                    </div>
                                    <div className="inline-flex shrink-0 items-center px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-sm font-semibold tracking-wide border border-blue-500/20 shadow-inner mt-2 md:mt-0">
                                        {item.period}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Experience;
