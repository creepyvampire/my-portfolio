import React from 'react'
import { motion } from 'framer-motion';
import profpic from "../assets/arjunShastry.jpg";

const Intro = () => {

    const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    });

    const intrPara =
        "A committed computer science student and web developer with experience building dynamic applications using technologies including but not limited to React, Next.js and MERN stack. My work includes real-time geospatial analysis tools, dynamic web and mobile applications. I focus on creating innovative, scalable solutions that merge practical functionality with cutting-edge technology."
    return (
        <div class='border-b border-neutral-900 p-4 lg:mb-36'>
            <div class='flex flex-wrap'>
                <div class='w-full lg:w-1/2'>
                    <div class='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(0)}
                            initial='hidden'
                            animate='show'
                            class='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Arjun Shastry</motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial='hidden'
                            animate='show'
                            class='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial='hidden'
                            animate='show'
                            class='my-2 max-w-xl py-6 font-light tracking-tight'>{intrPara}</motion.p>
                    </div>
                </div>
                <div class='w-full lg:w-1/2 lg:p-8'>
                    <div class='flex justify-center'>
                        <motion.img class='rounded-xl max-w-md'
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            src={profpic} alt='Arjun Shastry' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro