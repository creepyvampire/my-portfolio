import React from 'react'

import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav class=' mb-20 flex items-center justify-between py-6'>
            <div class='flex flex-shrink-0 items-center'>
                <img src='https://placehold.co/75x75' alt='logo' />
            </div>
            <div class='m-8 flex items-center justify-center gap-4 text-3xl'>
                <FaGithub />
                <FaLinkedin />
            </div>
        </nav>
    )
}

export default Navbar