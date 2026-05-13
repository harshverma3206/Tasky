import React from 'react'

//Icons
import { RxCross1 } from "react-icons/rx";

const Completed = () => {
    return (
        <div
            className='bg-[var(--primary-light)] p-4! lg:px-4! lg:rounded-4xl rounded-2xl w-full min-h-[280px] backdrop-blur-2xl'
        >
            <div className='flex justify-between mb-5!'>
                <h2>Completed</h2>
                <h2>0</h2>
            </div>

        </div>
    )
}

export default Completed
