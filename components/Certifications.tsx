"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { certifications } from "@/lib/data";

const Certifications = () => {
    return (
        <SectionWrapper id="certifications">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Certifications
            </h2>

            {/* Horizontal Scroll Container */}
            <div className="relative group">
                <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent px-4">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="snap-center shrink-0 w-[300px] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                        >
                            {/* Image Area */}
                            <div className="h-44 w-full relative overflow-hidden bg-black/50">
                                <div className="absolute inset-0 bg-blue-500/10 z-10" />
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Text Area */}
                            <div className="p-5 h-[120px] flex flex-col justify-between">
                                <h3 className="text-md font-bold text-gray-100 leading-snug line-clamp-2" title={cert.title}>
                                    {cert.title}
                                </h3>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full border border-blue-400/20">
                                        {cert.issuer}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Fade cues */}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
            </div>

        </SectionWrapper>
    );
};

export default Certifications;
