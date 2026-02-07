"use client";

import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

const SectionWrapper = ({ children, id, className = "" }: Props) => {
    return (
        <section id={id} className={`py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden ${className}`}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="w-full"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
