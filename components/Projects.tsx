"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { projects } from "@/lib/data";

const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 text-center mb-16">
                Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex flex-col bg-white/5 border border-white/10 hover:border-blue-500/40 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] backdrop-blur-sm"
                    >
                        {/* Project Image */}
                        <div className="relative h-56 overflow-hidden">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.innerHTML = `<div class="h-full w-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"><span class="text-gray-500 text-4xl font-bold opacity-30">${project.title.charAt(0)}</span></div>`;
                                }}
                            />
                        </div>

                        <div className="flex flex-col flex-1 p-8 space-y-6">
                            <div className="flex justify-between items-start">
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                                    {project.title}
                               </h3>
                                <div className="flex gap-3 shrink-0 ml-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <p className="text-gray-400 text-base leading-relaxed flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-bold tracking-wide text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
