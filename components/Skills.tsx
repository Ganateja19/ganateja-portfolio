"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skills } from "@/lib/data";

const Skills = () => {
    return (
        <SectionWrapper id="skills">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Technical Skills
            </h2>
            <div className="grid gap-8">
                {Object.entries(skills).map(([category, items]: [string, any[]]) => (
                    <div key={category} className="space-y-4">
                        <h3 className="text-xl font-semibold text-blue-400">{category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {items.map((skill: string, index: number) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm md:text-base text-gray-300 font-medium cursor-default hover:text-white hover:bg-white/10 transition-all"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
