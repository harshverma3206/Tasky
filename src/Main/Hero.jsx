import React from 'react'

//Icons
import { TiPlus } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

//Components
import Pending from '../Components/Pending';
import Completed from '../Components/Completed';
import Progress from '../Components/Progress';

const Hero = () => {
    return (
        <div className='bg-[var(--primary-black)] p-5! md:px-10! sm:px-7! lg:px-13! relative min-h-screen flex flex-col'>
            <button className='fixed bottom-10 right-10 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 p-5! active:scale-90 transition-all rounded-full text-2xl bg-[var(--primary-dark)] text-[var(--primary-extra-light)]'>
                <TiPlus />
            </button>

            <h1 className='lg:px-10! fixed top-5 left-5'>Tasky</h1>

            {/* Board */}
            <div className='flex flex-col lg:flex-row gap-5 justify-between mt-25! lg:grow pb-8!'>
                <Pending />
                <Progress />
                <Completed />
            </div>
        </div>
    )
}

export default Hero
