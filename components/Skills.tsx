"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skillCategories } from "@/lib/data";

const categoryThemes: Record<string, { bg: string, text: string, border: string, icon: string, shadow: string }> = {
    "DATA ENGINEERING": { bg: "bg-blue-500", text: "text-blue-300", border: "hover:border-blue-500/50", icon: "🛠️", shadow: "hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)]" },
    "ERP & SYSTEMS": { bg: "bg-indigo-500", text: "text-indigo-300", border: "hover:border-indigo-500/50", icon: "💼", shadow: "hover:shadow-[0_10px_40px_rgba(99,102,241,0.15)]" },
    "REAL-TIME PROCESSING": { bg: "bg-orange-500", text: "text-orange-300", border: "hover:border-orange-500/50", icon: "⚡", shadow: "hover:shadow-[0_10px_40px_rgba(249,115,22,0.15)]" },
    "DATA QUALITY & GOVERNANCE": { bg: "bg-green-500", text: "text-green-300", border: "hover:border-green-500/50", icon: "🛡️", shadow: "hover:shadow-[0_10px_40px_rgba(34,197,94,0.15)]" },
    "CLOUD & PLATFORMS": { bg: "bg-cyan-500", text: "text-cyan-300", border: "hover:border-cyan-500/50", icon: "☁️", shadow: "hover:shadow-[0_10px_40px_rgba(6,182,212,0.15)]" },
    "ORCHESTRATION & AUTOMATION": { bg: "bg-purple-500", text: "text-purple-300", border: "hover:border-purple-500/50", icon: "⚙️", shadow: "hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)]" },
    "AI & EMERGING": { bg: "bg-rose-500", text: "text-rose-300", border: "hover:border-rose-500/50", icon: "🧠", shadow: "hover:shadow-[0_10px_40px_rgba(244,63,94,0.15)]" },
    "DEVOPS & INFRASTRUCTURE": { bg: "bg-slate-500", text: "text-slate-300", border: "hover:border-slate-500/50", icon: "🏗️", shadow: "hover:shadow-[0_10px_40px_rgba(100,116,139,0.15)]" },
};

const defaultTheme = { bg: "bg-blue-500", text: "text-blue-300", border: "hover:border-blue-500/50", icon: "🔧", shadow: "hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)]" };

const Skills = () => {
    return (
        <SectionWrapper id="skills">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 text-center mb-16">
                Technical Expertise
            </h2>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {skillCategories.map((cat, index) => {
                        const theme = categoryThemes[cat.category] || defaultTheme;
                        
                        return (
                            <motion.div
                                key={cat.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-7 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:-translate-y-2 ${theme.shadow} ${theme.border}`}
                            >
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/[0.02] to-transparent z-0" />
                                <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 z-0 ${theme.bg}`} />
                                
                                {/* Category Header */}
                                <div className="flex items-center gap-4 z-10 border-b border-white/5 pb-5">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3">
                                        {theme.icon}
                                    </div>
                                    <h3 className={`font-bold tracking-wide text-lg md:text-xl ${theme.text}`}>
                                        {cat.category}
                                    </h3>
                                </div>
                                
                                {/* Skill Tags */}
                                <div className="flex flex-wrap gap-2.5 z-10">
                                    {cat.skills.map(skill => (
                                        <span 
                                            key={skill} 
                                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-default shadow-sm"
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
