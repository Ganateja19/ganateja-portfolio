"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skillCategories } from "@/lib/data";

const categoryThemes: Record<string, { bg: string, text: string, border: string, icon: string }> = {
    "DATA ENGINEERING (Core)": { bg: "bg-blue-500", text: "text-blue-300", border: "border-blue-500/20", icon: "🛠️" },
    "ERP & SYSTEMS (JD Critical)": { bg: "bg-indigo-500", text: "text-indigo-300", border: "border-indigo-500/20", icon: "💼" },
    "REAL-TIME PROCESSING": { bg: "bg-orange-500", text: "text-orange-300", border: "border-orange-500/20", icon: "⚡" },
    "DATA QUALITY & GOVERNANCE": { bg: "bg-green-500", text: "text-green-300", border: "border-green-500/20", icon: "🛡️" },
    "CLOUD & PLATFORMS": { bg: "bg-cyan-500", text: "text-cyan-300", border: "border-cyan-500/20", icon: "☁️" },
    "ORCHESTRATION & AUTOMATION": { bg: "bg-purple-500", text: "text-purple-300", border: "border-purple-500/20", icon: "⚙️" },
    "AI & EMERGING": { bg: "bg-rose-500", text: "text-rose-300", border: "border-rose-500/20", icon: "🧠" },
    "DEVOPS & INFRASTRUCTURE": { bg: "bg-slate-500", text: "text-slate-300", border: "border-slate-500/20", icon: "🏗️" },
};

const defaultTheme = { bg: "bg-blue-500", text: "text-blue-300", border: "border-blue-500/20", icon: "🔧" };

const Skills = () => {
    return (
        <SectionWrapper id="skills">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 text-center mb-16">
                Technical Expertise
            </h2>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((cat, index) => {
                        const theme = categoryThemes[cat.category] || defaultTheme;
                        
                        return (
                            <motion.div
                                key={cat.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="group relative bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-6 flex flex-col gap-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
                            >
                                {/* Background subtle glow effect on hover */}
                                <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-500 ${theme.bg}`} />
                                
                                {/* Category Header */}
                                <div className="flex items-center gap-3 z-10">
                                    <span className="text-2xl drop-shadow-md">
                                        {theme.icon}
                                    </span>
                                    <h3 className={`font-bold tracking-wide text-lg ${theme.text}`}>
                                        {cat.category}
                                    </h3>
                                </div>
                                
                                {/* Skill Tags */}
                                <div className="flex flex-wrap gap-2 z-10">
                                    {cat.skills.map(skill => (
                                        <span 
                                            key={skill} 
                                            className="px-3 py-1.5 bg-black/40 border border-white/5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-black/60 hover:border-white/20 transition-all cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Skills;
