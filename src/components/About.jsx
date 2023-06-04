import React from 'react'
import { FiGithub } from 'react-icons/fi'

export default function About() {
    return (
        <div className='text-center font-outfit text-secondary'>
            <img src="https://avatars.githubusercontent.com/u/64362298?v=4" alt="" width="140" className='mx-auto rounded-full  mt-14' />
            <p className='mt-5 text-md'>Hi, I'm Emre 👋</p>
            <h1 className='md:text-6xl text-4xl mt-5 font-semibold'>
                Building digital
                <br />
                projects, apps, and
                <br />
                products.
            </h1>
            <a href="https://github.com/emrebakkal?tab=repositories" className='flex items-center justify-center text-md mt-10 bg-quaternary lg:w-[25%] w-[70%] h-[60px] rounded-sm mx-auto border border-[#3a3a3a] hover:text-white transition-colors'>
                <FiGithub className='mr-2' />
                <span>GitHub Repositories</span>
            </a>
        </div>
    )
}
