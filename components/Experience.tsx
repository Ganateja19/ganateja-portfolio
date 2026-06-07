"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { experience } from "@/lib/data";

const Experience = () => {
    return (
        <SectionWrapper id="experience">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 text-center mb-16">
                Professional Journey
            </h2>
            <div className="max-w-6xl mx-auto px-2 md:px-0">
                <div className="relative before:absolute before:inset-0 before:ml-[31px] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-blue-600/30 before:via-blue-500/50 before:to-transparent pb-10">
                    <div className="flex flex-col gap-12 md:gap-16">
                        {experience.map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center justify-between w-full group ${
                                    index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                                }`}
                            >
                                {/* Spacer element */}
                                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                                
                                {/* Glowing Timeline Node */}
                                <div className="absolute left-[32px] md:left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 md:border-[4px] border-[#030712] bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10 group-hover:bg-white group-hover:shadow-[0_0_25px_rgba(255,255,255,1)] group-hover:scale-125 transition-all duration-500" />

                                {/* Experience Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`w-full pl-20 md:pl-0 md:w-[calc(50%-3rem)] z-10 shrink-0 flex ${
                                        index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                    }`}
                                >
                                    <div className="relative w-56 md:w-64 min-h-[280px] flex flex-col justify-center overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-500 shadow-lg hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] group-hover:-translate-y-1 backdrop-blur-md">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                                        
                                        <div className="relative z-10 flex flex-col gap-4">
                                            <div className="flex flex-col gap-1.5">
                                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight leading-tight">
                                                    {item.role}
                                                </h3>
                                                <h4 className="text-sm font-semibold text-blue-400">
                                                    {item.company}
                                                </h4>
                                            </div>
                                            
                                            <div className="text-xs md:text-sm font-mono text-gray-400 mt-2 bg-black/20 p-2 rounded-md border border-white/5 w-fit">
                                                {item.period}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Experience;
