"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { certifications } from "@/lib/data";

const Certifications = () => {
    return (
        <SectionWrapper id="certifications">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 text-center mb-16">
                Certifications
            </h2>

            {/* Static Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] backdrop-blur-sm"
                    >
                        {/* Image Area */}
                        <div className="h-48 w-full relative overflow-hidden bg-black/50">
                            <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Text Area */}
                        <div className="p-5 flex flex-col gap-3">
                            <h3 className="text-base font-bold text-gray-100 leading-snug group-hover:text-blue-300 transition-colors line-clamp-2" title={cert.title}>
                                {cert.title}
                            </h3>
                            <span className="inline-flex w-fit text-xs font-mono text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-full border border-blue-400/20 group-hover:bg-blue-500/20 transition-colors">
                                {cert.issuer}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
