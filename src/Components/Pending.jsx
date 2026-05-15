import React, { use, useRef, useState } from 'react'

//Icons
import { RxCross1 } from "react-icons/rx";
import { FaArrowUp } from "react-icons/fa";

const Pending = ({ Task, dragEvent, columnRef }) => {

    return (
        <div
            {...dragEvent}
            ref={columnRef}
            className='transitionClass lg:scale-95 bg-[var(--primary-light)] p-4! lg:px-4! rounded-2xl w-full min-h-[280px] backdrop-blur-2xl'
        >
            <div className='flex justify-between mb-5!'>
                <h2>Pending</h2>
                <h2>{Task.length}</h2>
            </div>

            <div className='flex flex-col gap-2'>
                {Task.map((task, index) => (
                    <div
                        draggable='true'
                        key={index}
                        className='bg-[var(--glass-color)] backdrop-blur-3xl px-4! py-3! rounded-2xl cursor-grab group relative'
                    >
                        <h3>{task.name}</h3>
                        <p>{task.description}</p>
                        <button className='bg-red-700/70 rounded-full p-1.5! cursor-default! active:scale-80 text-red-50 font-bold md:opacity-0 group-hover:opacity-100 fixed top-3 right-3'>
                            <RxCross1 size={7} strokeWidth={1.5} />
                        </button>
                        {task.priority === 'true' && (
                            <button
                                className='bg-green-600 rounded-full p-1.5! cursor-default! text-green-50 font-bold fixed top-3 right-9'>
                                <FaArrowUp size={7} strokeWidth={1.5} />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pending
