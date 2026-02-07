"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { experience } from "@/lib/data";

const Experience = () => {
    return (
        <SectionWrapper id="experience">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Work Experience
            </h2>
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {experience.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        {/* Icon */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full" />
                        </div>

                        {/* Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/30 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                                    <div className="text-blue-400 font-medium">{item.company}</div>
                                </div>
                                <div className="text-gray-500 text-sm font-mono whitespace-nowrap bg-white/5 px-3 py-1 rounded-full">
                                    {item.period}
                                </div>
                            </div>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400 text-sm leading-relaxed">
                                {item.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Experience;
