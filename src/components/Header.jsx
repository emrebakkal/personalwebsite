import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

export default function Header() {
    return (
        <div className="flex justify-center">
            <header className='flex justify-between md:w-[70%] w-full text-tertiary items-center border-b header border-b-[#313131]'>
                <a href="mailto:archeian@protonmail.com" className='flex items-center hover:text-white transition-colors mr-5'>
                    <div className="bg-quaternary rounded-full p-4 border border-[#3a3a3a] lg:mr-5 ml-5">
                        <AiOutlineMail className='text-2xl' />
                    </div>
                    <span className='touch'>Get in touch</span>
                </a>
                <nav>
                    <ul className='flex text-md font-circular mr-5'>
                        <li className='mr-4 '>
                            <a href="https://t.me/nargilepadisahi" className='hover:text-white transition-colors'>Telegram</a>
                        </li>
                        <li className='mr-4'>
                            <a href="https://twitter.com/emreyimknk" className='hover:text-white transition-colors'>Twitter</a>
                        </li>

                        <li className='mr-4'>
                            <a href="https://github.com/emrebakkal" className='hover:text-white transition-colors'>GitHub</a>
                        </li>
                    </ul>
                </nav>
            </header >
        </div>
    )
}
