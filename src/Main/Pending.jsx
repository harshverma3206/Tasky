import React, { use, useEffect, useMemo, useRef, useState } from 'react'

//Icons
import { RxCross1 } from "react-icons/rx";
import { FaArrowUp } from "react-icons/fa";

const Pending = ({ Tasks, dragEvent, columnRef }) => {

    const sortedTask = useMemo(() => (
        [...Tasks].sort((a, b) => b.priority - a.priority)
    ), [Tasks])


    return (
        <div
            {...dragEvent}
            ref={columnRef}
            className='transitionClass relative lg:scale-95 bg-[var(--primary-light)] p-4! lg:px-4! rounded-2xl w-full min-h-[280px] backdrop-blur-2xl'
        >
            <div className='fixed top-5 flex'>
                <h2>Pending</h2>
                <h2>{Tasks.length}</h2>
            </div>

            <div className='flex flex-col gap-2 overflow-scroll h-[70vh] rounded-2xl mt-12!'>
                {sortedTask.map((task, index) => (
                    <div
                        draggable='true'
                        key={task.id}
                        className='bg-[var(--glass-color)] backdrop-blur-3xl px-4! py-3! rounded-2xl cursor-grab group relative'
                    >
                        <h3>{task.name}</h3>
                        <p>{task.description}</p>
                        <button className='bg-red-700/70 rounded-full p-1.5! cursor-default! active:scale-80 text-red-50 font-bold md:opacity-0 group-hover:opacity-100 fixed top-3 right-3'>
                            <RxCross1 size={7} strokeWidth={1.5} />
                        </button>
                        {task.priority === true && (
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
