"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

const Education = () => {
    return (
        <SectionWrapper id="education">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Education
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-blue-500/30 transition-colors relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <GraduationCap className="w-24 h-24 text-blue-500" />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                            <div className="text-blue-400 font-medium mb-1">{edu.degree}</div>
                            <div className="text-gray-500 text-sm mb-6">{edu.period}</div>

                            <div>
                                <h4 className="text-sm font-semibold text-gray-300 mb-2">Relevant Coursework:</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {edu.coursework}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Education;
