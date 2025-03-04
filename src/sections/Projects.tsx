"use client";

import sageAiImage from "@/assets/images/SAGE-AI.png";
import craftImage from "@/assets/images/craftImage.png";
import sproutImage from "@/assets/images/sprout-image.png";
import smoovImage from "@/assets/images/Smoov youtube.png";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { Card } from "@/components/Card";
import githubLogo from "@/assets/images/github-logo.svg";
import framerLogo from "@/assets/images/framer-logo.svg";
import reactLogo from "@/assets/images/react.svg";
import vercelLogo from "@/assets/images/vercel.svg";
import nodeLogo from "@/assets/images/nodedotjs.svg";
import mongoLogo from "@/assets/images/mongodb.svg";
import geminiLogo from "@/assets/images/googlegemini.svg";
import nextLogo from "@/assets/images/nextdotjs.svg";
import sandboxLogo from "@/assets/images/codesandbox.svg";
import firebaseLogo from "@/assets/images/firebase.svg";
import googleCloudLogo from "@/assets/images/googlecloud.svg";
import pythonLogo from "@/assets/images/python.svg";
import tensorflowLogo from "@/assets/images/tensorflow.svg";
import numpyLogo from "@/assets/images/numpy.svg";
import androidLogo from "@/assets/images/android.svg";
import flaskLogo from "@/assets/images/flask.svg";    
import IntegrationColumn from "@/components/integrationColumn";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const portfolioProjects = [
    {
        company: "February",
        year: "2025",
        title: "craft.new",
        image: craftImage,
        results: [
            { title: "Helps users generate ready-to-deploy websites using AI" },
            { title: "Reduces website development time by 80%" },
            { title: "Provides customizable templates for various use cases" },
        ],
        link: "https://craft-new.vercel.app",
        integrations: [
            {
                name: "Google Cloud",
                icon: googleCloudLogo,
                description:
                    "Cloud platform for scalable and reliable backend services.",
            },
            {
                name: "Gemini AI",
                icon: geminiLogo,
                description: "AI model for intelligent website generation.",
            },
            {
                name: "Next.js",
                icon: nextLogo,
                description:
                    "Framework for building responsive web applications.",
            },
            {
                name: "GitHub",
                icon: githubLogo,
                description: "Version control and code collaboration platform.",
            },
            {
                name: "Vercel",
                icon: vercelLogo,
                description: "Platform for deploying frontend applications.",
            },
            {
                name: "Sandbox",
                icon: sandboxLogo,
                description:
                    "Interactive development environment for testing and prototyping.",
            },
        ],
    },
    {
        company: "Hackville",
        year: "2025",
        title: "Sprout",
        results: [
            { title: "Fostered meaningful connections among students" },
            { title: "Enhanced peer-to-peer learning experience" },
            { title: "Won Best Use of Google Cloud - GDG" },
        ],
        link: "https://www.sprount.tech/",
        image: sproutImage,
        integrations: [
            {
                name: "Next.js",
                icon: nextLogo,
                description:
                    "Framework for building responsive web applications.",
            },
            {
                name: "Firebase",
                icon: firebaseLogo,
                description:
                    "Backend-as-a-Service for real-time database and authentication.",
            },
            {
                name: "Google Cloud",
                icon: googleCloudLogo,
                description:
                    "Cloud platform for scalable and reliable backend services.",
            },
            {
                name: "GitHub",
                icon: githubLogo,
                description: "Version control and code collaboration platform.",
            },
            {
                name: "Vercel",
                icon: vercelLogo,
                description: "Platform for deploying frontend applications.",
            },
        ],
    },
    {
        company: "October",
        year: "2024",
        title: "Sage AI - ChatGPT Clone",
        results: [
            { title: "Streamlined user experience" },
            { title: "Increased user engagement by 30%" },
            { title: "Integrated real-time data processing" },
        ],
        link: "https://sage-ai-frontend.onrender.com",
        image: sageAiImage,
        integrations: [
            {
                name: "React",
                icon: reactLogo,
                description: "JavaScript library for building user interfaces.",
            },
            {
                name: "Framer Motion",
                icon: framerLogo,
                description: "Animation library for React.",
            },
            {
                name: "Gemini AI",
                icon: geminiLogo,
                description:
                    "AI model integration for ChatGPT-like functionality.",
            },
            {
                name: "Node.js",
                icon: nodeLogo,
                description: "JavaScript runtime for backend development.",
            },
            {
                name: "MongoDB",
                icon: mongoLogo,
                description: "NoSQL database for data storage.",
            },
            {
                name: "GitHub",
                icon: githubLogo,
                description: "Code collaboration platform.",
            },
        ],
    },
    {
        company: "January - December",
        year: "2024",
        title: "Smoov",
        results: [
            { title: "Automated detection of potholes using machine learning" },
            { title: "Optimized data processing for faster pothole identification" },
            { title: "Improved road safety by providing real-time alerts" },
            { title: "Winner SDNE Capstone - Sheridan College 2024" },
        ],
        link: "https://www.youtube.com/watch?v=DGSKbb3TxRA", 
        image: smoovImage,
        integrations: [
            {
                name: "Python",
                icon: pythonLogo,
                description: "Programming language used for data analysis and automation.",
            },
            {
                name: "TensorFlow",
                icon: tensorflowLogo,
                description: "Machine learning framework for training and deploying models.",
            },
            {
                name: "NumPy",
                icon: numpyLogo,
                description: "Library for numerical computing and data processing.",
            },
            {
                name: "Google Cloud",
                icon: googleCloudLogo,
                description: "Cloud platform for data storage and model deployment.",
            },
            {
                name: "Android",
                icon: androidLogo,
                description: "Mobile application for real-time pothole alerts and reporting.",
            },
            {
                name: "Flask",
                icon: flaskLogo,
                description: "Lightweight web framework for backend API communication.",
            },
        ],
    }
    
];

export const integrations = portfolioProjects.flatMap(
    (project) => project.integrations
);

export type IntegrationsType = typeof integrations;

export const ProjectsSection = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleNextProject = () => {
        setCurrentProjectIndex(
            (prevIndex) => (prevIndex + 1) % portfolioProjects.length
        );
    };

    const handlePreviousProject = () => {
        setCurrentProjectIndex(
            (prevIndex) =>
                (prevIndex - 1 + portfolioProjects.length) %
                portfolioProjects.length
        );
    };

    useEffect(() => {
        const interval = setInterval(handleNextProject, 10000);
        return () => clearInterval(interval);
    }, []);

    const currentProject = portfolioProjects[currentProjectIndex];

    return (
        <section className="pb-16 lg:py-28" id="projects">
            <div className="container">
                <div className="flex justify-center">
                    <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-gradient-s to-gradient-e text-center bg-clip-text text-transparent">
                        Projects
                    </p>
                </div>

                <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
                    Featured Projects
                </h2>
                <p className="text-center text-white/80 mt-4 max-w-md md:text-lg lg:text-xl mx-auto">
                    Discover my projects designed to solve real-world problems
                    and create impactful digital experiences
                </p>

                <div className="flex flex-col relative mt-10 items-center gap-8">
                    <div className="grid md:grid-cols-2 gap-8 items-start w-full max-w-7xl">
                        <motion.div
                            key={currentProject.title}
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="md:col-span-1"
                        >
                            <Card className="px-8 pb-0 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                                <div>
                                    <div className="bg-gradient-to-r from-gradient-s to-gradient-e inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                                        <span>{currentProject.company}</span>
                                        <span>&bull;</span>
                                        <span>{currentProject.year}</span>
                                    </div>
                                    <h2 className="font-serif text-2xl mt-2 md:5 md:text-4xl">
                                        {currentProject.title}
                                    </h2>
                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                        {currentProject.results.map(
                                            (result) => (
                                                <li
                                                    key={result.title}
                                                    className="flex gap-2 text-sm md:text-base text-white/70"
                                                >
                                                    <CheckCircleIcon className="size-5 md:size-6" />
                                                    <span>{result.title}</span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <a href={currentProject.link}>
                                        <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                                            <span>Visit Live Site</span>
                                            <ArrowUpRightIcon className="size-4" />
                                        </button>
                                    </a>
                                </div>
                                <div className="relative mt-8">
                                    <Image
                                        src={currentProject.image}
                                        alt={currentProject.title}
                                        className="rounded-lg"
                                    />
                                </div>
                            </Card>
                        </motion.div>
                        <motion.div
                            key={`integration-columns-${currentProjectIndex}`}
                            className="h-[400px] lg:h-[600px] mt-8 lg:mt-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:col-span-1 grid md:grid-cols-2 gap-4 overflow-hidden"
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "-100%", opacity: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <IntegrationColumn
                                integrations={currentProject.integrations}
                            />
                            <IntegrationColumn
                                integrations={currentProject.integrations
                                    .slice()
                                    .reverse()}
                                reverse
                            />
                        </motion.div>
                    </div>
                    <div className="flex gap-4 mt-8 items-center justify-center">
                        <div className="flex items-center space-x-2">
                            {portfolioProjects.map((_, index) => (
                                <motion.div
                                    key={index}
                                    className={`w-3 h-3 rounded-full cursor-pointer ${
                                        index === currentProjectIndex
                                            ? "bg-gradient-e"
                                            : "bg-white/50"
                                    }`}
                                    animate={{
                                        opacity:
                                            index === currentProjectIndex
                                                ? 1
                                                : 0.5,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() =>
                                        setCurrentProjectIndex(index)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
