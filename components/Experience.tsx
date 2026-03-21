"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

const Experience = () => {
    return (
        <SectionWrapper id="experience">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 text-center mb-16">
                Professional Journey
            </h2>
            <div className="max-w-4xl mx-auto flex flex-col gap-6 md:gap-8">
                {experience.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/40 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                    >
                        {/* Dynamic background lighting */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        <div className="relative z-10 flex items-center gap-5 md:gap-6 w-full md:w-auto">
                            {/* Icon Container */}
                            <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:text-blue-300 group-hover:border-blue-400/40 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500">
                                <Briefcase className="w-6 h-6 md:w-8 md:h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                            </div>
                            
                            <div className="flex flex-col">
                                <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors duration-300">
                                    {item.role}
                                </h3>
                                <div className="text-base md:text-xl font-medium text-gray-400 mt-1 flex items-center gap-2.5">
                                    <span className="relative flex h-2 w-2">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 group-hover:opacity-100"></span>
                                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    {item.company}
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-6 md:mt-0 flex shrink-0 w-full md:w-auto sm:ml-20 md:ml-0">
                            <div className="inline-flex items-center justify-center w-full px-4 py-2 md:px-5 md:py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold text-sm md:text-base tracking-wide group-hover:bg-blue-500/20 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-500 text-center">
                                {item.period}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Experience;
