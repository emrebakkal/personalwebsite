import React from 'react'
import { IoLogoJavascript, IoLogoNodejs, IoLogoPython, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import { FaPhp, FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

export default function Typer() {
    return (
        <div className="bg-quaternary h-40 border-[#3a3a3a] border-t border-b flex text-secondary items-center transition-opacity font-outfit text-3xl font-semibold" >
            <div className="container mx-auto">
                {/* <div className="text-center">
                    <TypeAnimation
                        cursor={true}
                        repeat={Infinity}
                        sequence={[
                            'React, NodeJS, JavaScript',
                            1000,
                            'PHP, HTML, CSS, MySQL',
                            1000,
                            'Bootstrap, TailwindCSS',
                            1000,
                            'Python, NextJS',
                            1000,
                            'MongoDB, Firebase',
                            1000,
                            'Git, GitHub, GitLab',
                            1000,
                            'Adobe Photoshop, Adobe XD, Figma',
                            1000,
                        ]}
                    />
                </div> */}
                <div className="prog-icons flex justify-center">
                    <p className='lg:text-6xl'>
                        <IoLogoJavascript className='' />
                    </p>
                    <p className='lg:text-6xl'>
                        <IoLogoNodejs className='' />
                    </p>
                    <p className='lg:text-6xl'>
                        <FaPhp className='' />
                    </p>
                    <p className='lg:text-6xl'>
                        <IoLogoPython className='' />
                    </p>
                    <p className='lg:text-6xl'>
                        <IoLogoHtml5 className='' />
                    </p>
                    <p className='lg:text-6xl'>
                        <IoLogoCss3 className='' />
                    </p>
                    <p className='lg:text-6xl'>
                        <FaReact className='' />
                    </p>
                    <p className='lg:text-6xl'>
                        <SiTailwindcss className='' />
                    </p>
                </div>
            </div>
        </div>
    )
}
