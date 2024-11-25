"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book.png";
import Image from "next/image";
import {
    SiReact,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiKotlin,
    SiSwift,
    SiAngular,
} from "@icons-pack/react-simple-icons";
import { CardHeader } from "@/components/card-header";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
    {
        title: "JavaScript",
        iconType: SiJavascript,
    },
    {
        title: "Typescript",
        iconType: SiTypescript,
    },
    {
        title: "React",
        iconType: SiReact,
    },
    {
        title: "Python",
        iconType: SiPython,
    },
    {
        title: "HTML5",
        iconType: SiHtml5,
    },
    {
        title: "CSS3",
        iconType: SiCss3,
    },
    {
        title: "Angular",
        iconType: SiAngular,
    },
    {
        title: "Node.Js",
        iconType: SiNodedotjs,
    },
    {
        title: "Kotlin",
        iconType: SiKotlin,
    },
    {
        title: "Swift",
        iconType: SiSwift,
    },
];

const hobbies = [
    {
        title: "Gaming",
        emoji: "🎮",
        left: "5%",
        top: "5%",
    },
    {
        title: "Gym",
        emoji: "🏋️‍♂️",
        left: "50%",
        top: "5%",
    },
    {
        title: "Painting",
        emoji: "🎨",
        left: "10%",
        top: "35%",
    },
    {
        title: "Exploring the City",
        emoji: "🌆",
        left: "35%",
        top: "40%",
    },
    {
        title: "Music",
        emoji: "🎵",
        left: "70%",
        top: "45%",
    },
    {
        title: "Anime",
        emoji: "🎥",
        left: "5%",
        top: "65%",
    },
    {
        title: "Reading",
        emoji: "📚",
        left: "45%",
        top: "70%",
    },
    {
        title: "Soccer",
        emoji: "⚽",
        left: "75%",
        top: "5%",
    },
    {
        title: "Cooking",
        emoji: "🍳",
        left: "75%",
        top: "75%",
    }
];

export const AboutSection = () => {
    const constraintRef = useRef(null);
    return (
        <div className="py-20 lg:py-28" id="about">
            <div className="container">
                <SectionHeader
                    eyebrow="About Me"
                    title="A Glimpse Into My World"
                    description="Learn more about who I am, what I do and what inspires me."
                />
                <div className="mt-20 flex flex-col gap-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
                        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                            <CardHeader
                                title="My Reads"
                                description="Explore the books shaping my perspectives."
                            />
                            <div className="w-80 mx-auto mt-2 md:w-72 md:mt-0">
                                <Image src={bookImage} alt="" />
                            </div>
                        </Card>
                        <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                            <CardHeader
                                title="My Toolbox"
                                description="Explore the technologies and tools I use to craft the best digital experiences."
                                className=""
                            />
                            <ToolboxItems
                                items={toolboxItems}
                                className=""
                                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                            />
                            <ToolboxItems
                                items={toolboxItems}
                                className="mt-6"
                                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
                            />
                        </Card>
                    </div>
                    <div>
                        <Card className="h-[320px] p-0 flex flex-col">
                            <CardHeader
                                title="Beyond The Code"
                                description="Explore my hobbies beyond coding realm."
                                className="px-6 py-6"
                            />
                            <div
                                className="relative flex-1"
                                ref={constraintRef}
                            >
                                {hobbies.map((hobby) => (
                                    <motion.div
                                        key={hobby.title}
                                        className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-gradient-s to-gradient-e rounded-full py-1.5 absolute"
                                        style={{
                                            left: hobby.left,
                                            top: hobby.top,
                                            border: "2px solid transparent",
                                            boxShadow:
                                                "0 0 10px 2px rgba(246, 128, 128, 0.8)",
                                        }}
                                        drag
                                        dragConstraints={constraintRef}
                                        whileDrag={{
                                            borderColor: "rgba(249, 177, 110, 1)", 
                                            boxShadow:
                                                "0 0 20px 4px rgba(246, 128, 128, 1)",
                                        }}
                                    >
                                        <span className="font-medium text-gray-950">
                                            {hobby.title}
                                        </span>
                                        <span>{hobby.emoji}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
