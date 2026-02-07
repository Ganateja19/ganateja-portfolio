"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const About = () => {
    return (
        <SectionWrapper id="about" className="bg-white/5 rounded-3xl my-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white"
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg leading-relaxed"
                    >
                        Analytical and detail-oriented Data Analyst with 5+ years of experience driving data-backed decision-making across healthcare, finance, and tech domains.
                        Expert in architecting scalable ETL workflows and automating analytics solutions using AWS, Azure, GCP, and Snowflake.
                        Proven track record of improving forecasting accuracy by 15%, enhancing pipeline efficiency by 30%, and developing 15+ interactive dashboards to boost executive-level reporting.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg leading-relaxed"
                    >
                        I am passionate about leveraging data to solve complex business problems and drive growth.
                    </motion.p>
                </div>

                {/* Profile Image */}
                <div className="relative h-64 md:h-full min-h-[300px] w-full rounded-2xl overflow-hidden border border-white/10 group">
                    <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-transparent transition-colors z-10" />
                    <img
                        src="/profile.jpg"
                        alt="Ganateja Thurpati"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                    />
                </div>
            </div>
        </SectionWrapper >
    );
};

export default About;
