import React, { useRef } from 'react'

//Icons
import { RxCross1 } from "react-icons/rx";

const Completed = ({ dragEvent, columnRef }) => {
    return (
        <div
            {...dragEvent}
            ref={columnRef}
            className='transitionClass lg:scale-95 bg-[var(--primary-light)] p-4! lg:px-4! rounded-2xl w-full min-h-[280px] backdrop-blur-2xl'
        >
            <div className='flex justify-between mb-5!'>
                <h2>Completed</h2>
                <h2>0</h2>
            </div>

        </div>
    )
}

export default Completed
