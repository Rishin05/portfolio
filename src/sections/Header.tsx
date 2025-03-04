"use client";
import { motion } from "framer-motion";

export const Header = () => {
    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="flex justify-center items-center sticky top-3 z-50">
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                <motion.a
                    href="#hero"
                    className="nav-item"
                    onClick={(e) => {
                        e.preventDefault();
                        handleScrollTo("hero");
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Home
                </motion.a>
                <motion.a
                    href="#projects"
                    className="nav-item"
                    onClick={(e) => {
                        e.preventDefault();
                        handleScrollTo("projects");
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Projects
                </motion.a>
                <motion.a
                    href="#about"
                    className="nav-item"
                    onClick={(e) => {
                        e.preventDefault();
                        handleScrollTo("about");
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    About
                </motion.a>
                <motion.a
                     href="#contact"
                    className="nav-item"
                    onClick={(e) => {
                        e.preventDefault();
                        handleScrollTo("contact");
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Contact
                </motion.a>
                <motion.a
                    href="https://drive.google.com/file/d/1oq0pf5qnjTH1ohSjHG19qnW_uDTl6g19/view?usp=drive_link"
                    className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Resume
                </motion.a>
            </nav>
        </div>
    );
};
