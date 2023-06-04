import React from 'react'
import { MdOutlineDraw } from 'react-icons/md'
import { AiOutlineLaptop } from 'react-icons/ai'
import { LuMonitorSmartphone } from 'react-icons/lu'
import { BsRobot } from 'react-icons/bs'

export default function Cards() {
    return (
        <div>
            <h1>

            </h1>
            <div className='lg:flex cards'>
                <div className='bg-quaternary w-[250px] h-[300px] text-secondary p-5 border border-[#3a3a3a] rounded-sm  mb-10'>
                    <div className='mt-[8rem]'>
                        <p className='text-3xl'>
                            <MdOutlineDraw />
                        </p>
                        <p className='font-bold'>Designing</p>
                        <p className='text-sm'>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                    </div>
                </div>
                <div className='bg-quaternary w-[250px] h-[300px] text-secondary p-5 border border-[#3a3a3a] rounded-sm '>
                    <div className='mt-[8rem]'>
                        <p className='text-3xl'>
                            <AiOutlineLaptop />
                        </p>
                        <p className='font-bold'>Coding</p>
                        <p className='text-sm'>Bringing your vision to life with the latest technology and design trends.</p>
                    </div>
                </div>
                <div className='bg-quaternary w-[250px] h-[300px] text-secondary p-5 border border-[#3a3a3a] rounded-sm  mb-10'>
                    <div className='mt-[8rem]'>
                        <p className='text-3xl'>
                            <LuMonitorSmartphone />
                        </p>
                        <p className='font-bold'>Web & Mobile App</p>
                        <p className='text-sm'>I develop web and mobile applications with the latest technologies.</p>
                    </div>
                </div>
                <div className='bg-quaternary w-[250px] h-[300px] text-secondary p-5 border border-[#3a3a3a] rounded-sm  mb-10'>
                    <div className='mt-[8rem]'>
                        <p className='text-3xl'>
                            <BsRobot />
                        </p>
                        <p className='font-bold'>Console & Bot Apps</p>
                        <p className='text-sm'>I develop console and bot applications with the latest technologies.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
