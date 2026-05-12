import React from 'react'
import { TiPlus } from "react-icons/ti";

const sectionStyle = [
    {
        name: 'To Do',
        count: 0,
    },
    {
        name: 'In Progress',
        count: 0,
    },
    {
        name: 'Completed',
        count: 0,
    }
]

const Hero = () => {
    return (
        <div className='bg-amber-200 p-5! md:px-15! lg:px-20! relative'>
            <button className='fixed bottom-10 left-1/2 -translate-x-1/2 p-5! active:scale-90 transition-all rounded-full bg-amber-900 text-amber-50 text-2xl'>
                <TiPlus />
            </button>

            <h1 className='mb-10! lg:px-10! fixed top-5 left-5'>Tasky</h1>

            {/* Board */}
            <div className='flex flex-col lg:flex-row gap-2 justify-between bg-pink-500/5 mt-20!'>
                {sectionStyle.map((section, index) => (
                    <div className='bg-amber-700/50 p-5! lg:px-8! rounded-2xl w-full min-w-[250px] min-h-[200px] lg:min-h-[550px]'>
                        <div key={index} className='flex justify-between'>
                            <h2>{section.name}</h2>
                            <h2>{section.count}</h2>
                        </div>

                        <div>
                            Task 01
                            Task 02
                            Task 03
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hero
