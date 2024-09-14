import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { RiFirebaseFill } from 'react-icons/ri';
import { FaPython } from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';
import { animate, motion, transform } from 'framer-motion';
function Tech() {

    const iconVaritants = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [-10, 10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }

    })

    return (
        <>
            <div class='border-b border-neutral-800 pb-24'>
                <h1 class='my-20 text-center text-4xl'>Technologies</h1>
                <div class='flex flex-wrap items-center justify-center gap-4'>
                    <motion.div
                        variants={iconVaritants(2.5)}
                        initial='initial'
                        animate='animate'
                        class='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiReactjsLine class='text-7xl text-cyan-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVaritants(2.1)}
                        initial='initial'
                        animate='animate'
                        class='rounded-2xl border-4 border-neutral-800 p-4'>
                        <TbBrandNextjs class='text-7xl' />
                    </motion.div>
                    <motion.div
                        variants={iconVaritants(1.7)}
                        initial='initial'
                        animate='animate'
                        class='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiMongodb class='text-7xl text-green-500' />
                    </motion.div>
                    <motion.div
                        variants={iconVaritants(2.8)}
                        initial='initial'
                        animate='animate'
                        class='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaNodeJs class='text-7xl text-green-300' />
                    </motion.div>
                    <motion.div
                        variants={iconVaritants(2)}
                        initial='initial'
                        animate='animate'
                        class='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiFirebaseFill class='text-7xl text-orange-500' />
                    </motion.div>
                    <motion.div
                        variants={iconVaritants(2.5)}
                        initial='initial'
                        animate='animate'
                        class='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaPython class='text-7xl text-yellow-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVaritants(2.1)}
                        initial='initial'
                        animate='animate'
                        class='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiTensorflow class='text-7xl text-orange-500' />
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Tech