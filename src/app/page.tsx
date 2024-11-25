import { Header } from "@/sections/Header";
import Hero from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import {TapeSection } from "@/sections/Tape"
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import MouseFollowCircle from "@/components/MouseFollowCircle";

export default function Home() {
    return (
        <>
            <MouseFollowCircle />
            <Header />
            <Hero />
            <ProjectsSection />
            <TapeSection />
            <AboutSection />
            <ContactSection />
            <Footer/>

        </>
    );
}
