"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skills } from "@/lib/data";

const skillIcons: Record<string, string> = {
    "Python": "🐍",
    "SQL": "🗃️",
    "PySpark": "⚡",
    "AWS S3": "☁️",
    "Snowflake": "❄️",
    "Airflow": "🌬️",
    "dbt": "🔧",
    "Kinesis": "🌊",
    "Lambda": "λ",
    "Great Expectations": "✅",
    "Docker": "🐳",
    "Git": "📦",
    "Power BI": "📊",
    "PostgreSQL": "🐘",
    "Kafka": "📡",
};

const skillColors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
    "Python": { bg: "bg-yellow-500/10", border: "border-yellow-500/20", text: "text-yellow-300", glow: "hover:shadow-[0_0_25px_rgba(234,179,8,0.25)]" },
    "SQL": { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-300", glow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]" },
    "PySpark": { bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-300", glow: "hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]" },
    "AWS S3": { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-300", glow: "hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]" },
    "Snowflake": { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-300", glow: "hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]" },
    "Airflow": { bg: "bg-teal-500/10", border: "border-teal-500/20", text: "text-teal-300", glow: "hover:shadow-[0_0_25px_rgba(20,184,166,0.25)]" },
    "dbt": { bg: "bg-rose-500/10", border: "border-rose-500/20", text: "text-rose-300", glow: "hover:shadow-[0_0_25px_rgba(244,63,94,0.25)]" },
    "Kinesis": { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-300", glow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]" },
    "Lambda": { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-300", glow: "hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]" },
    "Great Expectations": { bg: "bg-green-500/10", border: "border-green-500/20", text: "text-green-300", glow: "hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]" },
    "Docker": { bg: "bg-sky-500/10", border: "border-sky-500/20", text: "text-sky-300", glow: "hover:shadow-[0_0_25px_rgba(14,165,233,0.25)]" },
    "Git": { bg: "bg-red-500/10", border: "border-red-500/20", text: "text-red-300", glow: "hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]" },
    "Power BI": { bg: "bg-yellow-500/10", border: "border-yellow-500/20", text: "text-yellow-300", glow: "hover:shadow-[0_0_25px_rgba(234,179,8,0.25)]" },
    "PostgreSQL": { bg: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-300", glow: "hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]" },
    "Kafka": { bg: "bg-slate-400/10", border: "border-slate-400/20", text: "text-slate-300", glow: "hover:shadow-[0_0_25px_rgba(148,163,184,0.25)]" },
};

const defaultColor = { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-300", glow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]" };

const Skills = () => {
    return (
        <SectionWrapper id="skills">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 text-center mb-16">
                Technical Skills
            </h2>

            <div className="max-w-5xl mx-auto">
                <div className="flex flex-wrap justify-center gap-4 md:gap-5">
                    {skills.map((skill, index) => {
                        const colors = skillColors[skill] || defaultColor;
                        const icon = skillIcons[skill] || "⚙️";
                        
                        return (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ scale: 1.08, y: -4 }}
                                className={`group relative cursor-default`}
                            >
                                <div className={`relative flex items-center gap-3 px-5 py-3 md:px-6 md:py-3.5 rounded-2xl ${colors.bg} border ${colors.border} ${colors.glow} hover:border-opacity-60 backdrop-blur-sm transition-all duration-300`}>
                                    {/* Icon */}
                                    <span className="text-lg md:text-xl flex-shrink-0">
                                        {icon}
                                    </span>
                                    
                                    {/* Skill name */}
                                    <span className={`text-sm md:text-base font-semibold ${colors.text} whitespace-nowrap`}>
                                        {skill}
                                    </span>
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
