"use client"

import hi from '@/assets/images/hi.png'
import hello from '@/assets/images/hello.png'
import laptopImage from '@/assets/images/laptop wave.png'
import Image from 'next/image';
import Pointer from '@/components/Pointer';
import {motion, useAnimate } from 'framer-motion'
import { useEffect } from 'react';
import cursorYouImage from '@/assets/images/cursor-you.svg';
import Button from '@/components/connectButton';

export default function Hero() {
    const [leftDesignScope,leftDesignAnimate] = useAnimate();
    const [leftPointerScope,leftPointerAnimate] = useAnimate();
    const [rightDesignScope,rightDesignAnimate] = useAnimate();
    const [rightPointerScope,rightPointerAnimate] = useAnimate();
    
    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, {opacity: 1}, {duration: 0.5}],
            [leftDesignScope.current, {y:0, x:0}, {duration: 0.5}]
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, {opacity: 1},  {duration: 0.5}],
            [leftPointerScope.current, {y:0, x: -100},  {duration: 0.5}],
            [leftPointerScope.current, {x:0, y: [0,32,0]},  {duration: 0.5, ease: 'easeInOut'}]
        ]);

        
        rightDesignAnimate([
            [rightDesignScope.current, {opacity: 1}, {duration: 0.5, delay: 1.5}],
            [rightDesignScope.current, {y:0, x:0}, {duration: 0.5}]
        ]);
        rightPointerAnimate([
            [rightPointerScope.current, {opacity: 1},  {duration: 0.5, delay: 1.5}],
            [rightPointerScope.current, {y:0, x: 150},  {duration: 0.5}],
            [rightPointerScope.current, {x:0, y: [0,16,0]},  {duration: 0.5, ease: 'easeInOut'}]
        ]);

    }, []);
    return (
        <section className="py-28 overflow-x-clip" id="hero" style={{
            cursor: `url(${cursorYouImage.src}), auto`
        }}>
            <div className="container relative">
                <motion.div  ref={leftDesignScope} initial={{opacity : 0, y:100 , x:-200}}  drag className='absolute -left-32 top-16 border border-cyan-50 hidden lg:block' >
                    <Image src={hello} alt='' width={280} height={280} draggable="false"/>
                </motion.div>
                <motion.div  ref={rightDesignScope}  initial={{opacity : 0, y:100 , x:100}} drag className='absolute -right-64 -top-16 border border-cyan-50 hidden lg:block'>
                <Image src={hi} alt='' width={412} height={280} draggable="false" />
                </motion.div>
                <motion.div ref={leftPointerScope} initial={{opacity : 0, y:100 , x:-300}} className='absolute left-56 top-80 hidden lg:block '>
                    <Pointer/>
                </motion.div>
                <motion.div ref={rightPointerScope} initial={{opacity : 0, y:100 , x:300}} className='absolute right-60 -top-4 hidden lg:block'>
                    <Pointer/>
                </motion.div>
                <div className='flex justify-center'>
                                <Image src={laptopImage} alt='' className='size-[100px] md:size-[200px] lg:hidden' draggable="false"/>
                                </div>
                <div className=" flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-gradient-s to-gradient-e rounded-full text-neutral-950 font-semibold text-sm md:text-lg lg:text-md">
                    🧠 Simplifying complexity through technology.
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-xxl font-serif text-center mt-6">Hi, I'm Rishin Patel</h1>
                <p className="text-center text-xl text-white mt-8 max-w-2xl mx-auto">
                    I'm a dedicated developer and tech enthusiast passionate about
                    crafting seamless web and mobile solutions.Let's create something impactful
                    together!
                </p>
                <div className='flex justify-center align-top items-center'>
                    <Button/>
                </div>
            </div>
        </section>
    );
}
