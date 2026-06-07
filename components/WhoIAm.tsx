"use client";

import { motion } from "framer-motion";
import { personalData } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import { Compass, Lightbulb, Shield, Eye, Layers, Zap } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
    shield: <Shield className="w-4 h-4" />,
    eye: <Eye className="w-4 h-4" />,
    layers: <Layers className="w-4 h-4" />,
    zap: <Zap className="w-4 h-4" />,
};

const WhoIAm = () => {
    return (
        <SectionWrapper id="about">
            <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-start">
                {/* Profile Image — 2 cols */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-2 relative group"
                >
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />
                        <img
                            src="./profile.jpg"
                            alt="Ganateja Thurpati"
                            className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                    </div>
                </motion.div>

                {/* Content — 3 cols */}
                <div className="md:col-span-3 flex flex-col gap-8">
                    {/* About Me with previous description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6">
                            About Me
                        </h2>
                        {personalData.aboutParagraphs.map((para, i) => (
                            <p key={i} className="text-gray-400 text-lg leading-relaxed mb-4 last:mb-0">
                                {para}
                            </p>
                        ))}
                    </motion.div>

                    {/* Why Data Engineering */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative pl-5 border-l-2 border-blue-500/40"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <Lightbulb className="w-5 h-5 text-blue-400" />
                            <h3 className="text-lg font-bold text-white">Why Data Engineering?</h3>
                        </div>
                        <p className="text-gray-400 text-base leading-relaxed italic">
                            {personalData.whyDataEngineering}
                        </p>
                    </motion.div>

                    {/* Currently Exploring */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Compass className="w-5 h-5 text-emerald-400" />
                            <h3 className="text-lg font-bold text-white">Currently Exploring</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {personalData.currentlyExploring.map((item, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.08 }}
                                    className="px-4 py-2 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 cursor-default"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Key Beliefs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-lg font-bold text-white mb-4">Key Beliefs</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {personalData.keyBeliefs.map((belief, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300 group"
                                >
                                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                        {iconMap[belief.icon]}
                                    </span>
                                    <span className="text-sm text-gray-300 font-medium">
                                        {belief.statement}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default WhoIAm;
