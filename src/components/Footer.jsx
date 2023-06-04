import React from 'react'

export default function Footer() {
    return (
        <div className='w-[70%] mx-auto text-secondary'>
            <hr className='mb-10' />
            <div className="flex justify-between">
                <p>
                    © {Date().split(' ')[3]} - Yahya Emre
                </p>
                <a href="https://github.com/emrebakkal/personalwebsite" className='underline'>
                    Source Code
                </a>
            </div>

        </div>
    )
}
