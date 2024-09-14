import React from 'react'
import {motion} from 'framer-motion';

const About = () => {

    const aboutText = "I’m Arjun Shastry, a dedicated Computer Science student with a passion for technology and innovation. My journey began with a deep interest in tech, which has evolved into a strong focus on web and app development, AI, and IoT. I have participated in various hackathons. I pride myself on being a strong team player with excellent interpersonal skills, adaptability, and leadership qualities. Outside of my professional life, I enjoy trekking, video games, and learning guitar."

    return (
        <>
            <div class='border-b border-neutral-900 pb-4'>
                <h2 class='my-20 text-center text-4xl'>About <span class='text-neutral-500'>Me</span></h2>
                <div class='flex flex-wrap'>
                    <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1,delay:0.5}}
                    class='w-full lg:w-1/2 lg:p-8'>
                        <div class='flex items-center justify-center'>
                            <img class='rounded' src='https://placehold.co/400x400' alt='About'></img>
                        </div>
                    </motion.div>
                    <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:1,delay:0.5}}
                    class='w-full lg:w-1/2'>
                        <div class='flex justify-center lg:justify-start'>
                            <p class='my-2 max-w-xl py-6'>
                                {aboutText}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default About