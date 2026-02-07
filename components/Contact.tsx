"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { personalData } from "@/lib/data";

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="mb-20">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white"
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-lg"
                >
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center gap-6"
                >
                    <a
                        href={`mailto:${personalData.email}`}
                        className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
                    >
                        <Mail className="w-5 h-5" />
                        Say Hello
                    </a>
                    <a
                        href={personalData.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#0077b5] text-white hover:bg-[#006396] px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
                    >
                        <MessageSquare className="w-5 h-5" />
                        Connect on LinkedIn
                    </a>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
