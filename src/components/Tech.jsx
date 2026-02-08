import React from 'react'
// 1. New Imports for Embedded/UAV/Simulation
import { SiCplusplus } from 'react-icons/si';
import { FaLinux } from 'react-icons/fa';
import { SiUnrealengine } from 'react-icons/si';
import { SiDocker } from 'react-icons/si';

// 2. Existing Imports for Web/App
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';
import { RiFirebaseFill } from 'react-icons/ri';
import { FaPython } from 'react-icons/fa';

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
            <div className='border-b border-neutral-800 pb-24'>
                <h1 className='my-20 text-center text-4xl'>Technologies</h1>
                <div className='flex flex-wrap items-center justify-center gap-4'>
                    
                    {/* C++ (Your Primary Language) */}
                    <motion.div
                        variants={iconVaritants(2.5)}
                        initial='initial'
                        animate='animate'
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiCplusplus className='text-7xl text-blue-500' />
                    </motion.div>

                    {/* Linux (Critical for Embedded/UAV) */}
                    <motion.div
                        variants={iconVaritants(3)}
                        initial='initial'
                        animate='animate'
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaLinux className='text-7xl text-white' />
                    </motion.div>

                    {/* Unreal Engine (For Digital Twin/Simulation) */}
                    <motion.div
                        variants={iconVaritants(5)}
                        initial='initial'
                        animate='animate'
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiUnrealengine className='text-7xl text-white' />
                    </motion.div>

                     {/* Python (Scripting/GCS) */}
                     <motion.div
                        variants={iconVaritants(2.5)}
                        initial='initial'
                        animate='animate'
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaPython className='text-7xl text-yellow-400' />
                    </motion.div>

                    {/* Docker (For DevOps/Backend Requirements) */}
                    <motion.div
                        variants={iconVaritants(6)}
                        initial='initial'
                        animate='animate'
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiDocker className='text-7xl text-blue-400' />
                    </motion.div>

                    {/* React (Frontend) */}
                    <motion.div
                        variants={iconVaritants(2.5)}
                        initial='initial'
                        animate='animate'
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiReactjsLine className='text-7xl text-cyan-400' />
                    </motion.div>

                    {/* Next.js (Web Apps) */}
                    <motion.div
                        variants={iconVaritants(2.1)}
                        initial='initial'
                        animate='animate'
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <TbBrandNextjs className='text-7xl text-white' />
                    </motion.div>

                    {/* Node.js (Backend) */}
                    <motion.div
                        variants={iconVaritants(2.8)}
                        initial='initial'
                        animate='animate'
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaNodeJs className='text-7xl text-green-300' />
                    </motion.div>

                    {/* Firebase (App DB) */}
                    <motion.div
                        variants={iconVaritants(2)}
                        initial='initial'
                        animate='animate'
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiFirebaseFill className='text-7xl text-orange-500' />
                    </motion.div>

                </div>
            </div>
        </>
    )
}

export default Tech