import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

export default function Contact() {
    return (
        <div>
            <h1 className='text-center text-secondary md:text-5xl text-4xl font-semibold'>
                Tell me about your
                <br />
                next project
            </h1>
            <a href="mailto:archeian@protonmail.com" className='flex text-secondary items-center justify-center text-md mt-10 bg-quaternary lg:w-[25%] w-[70%] h-[60px] rounded-sm mx-auto border border-[#3a3a3a] hover:text-white transition-colors'>
                <AiOutlineMail className='mr-2' />
                <span>Get in touch</span>
            </a>
        </div>
    )
}
