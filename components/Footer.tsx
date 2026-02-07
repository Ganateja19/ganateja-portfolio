import { Github, Linkedin, Twitter } from "lucide-react";
import { personalData } from "@/lib/data";

const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} {personalData.name}. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <a
                        href={personalData.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href={personalData.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
