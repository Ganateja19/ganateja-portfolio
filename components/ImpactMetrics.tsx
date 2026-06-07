"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { impactMetrics } from "@/lib/data";
import { Database, TrendingDown, DollarSign, GitBranch } from "lucide-react";

const icons = [
    <Database className="w-6 h-6" key="db" />,
    <TrendingDown className="w-6 h-6" key="trend" />,
    <DollarSign className="w-6 h-6" key="dollar" />,
    <GitBranch className="w-6 h-6" key="git" />,
];

const AnimatedValue = ({ value, inView }: { value: string; inView: boolean }) => {
    const [display, setDisplay] = useState(value);

    useEffect(() => {
        if (!inView) return;

        const numMatch = value.match(/[\d.]+/);
        if (!numMatch) {
            setDisplay(value);
            return;
        }

        const num = parseFloat(numMatch[0]);
        const prefix = value.slice(0, value.indexOf(numMatch[0]));
        const suffix = value.slice(value.indexOf(numMatch[0]) + numMatch[0].length);

        const controls = animate(0, num, {
            duration: 1.5,
            ease: "easeOut",
            onUpdate: (v) => {
                setDisplay(`${prefix}${Math.round(v)}${suffix}`);
            },
        });

        return () => controls.stop();
    }, [inView, value]);

    return <span>{display}</span>;
};

const ImpactMetrics = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <SectionWrapper id="impact">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 text-center mb-16"
            >
                Impact at a Glance
            </motion.h2>

            <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {impactMetrics.map((metric, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col items-center gap-3">
                            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                                {icons[index]}
                            </span>

                            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-300 tracking-tight">
                                <AnimatedValue value={metric.value} inView={isInView} />
                            </div>

                            <div className="text-white font-bold text-sm md:text-base tracking-wide">
                                {metric.label}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default ImpactMetrics;
