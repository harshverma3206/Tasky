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
            className='transitionClass columnClass'
        >
            <div className='fixed left-0 right-0 top-5 flex justify-between px-6!'>
                <h2>Pending</h2>
                <h2>{Tasks.length}</h2>
            </div>

            <div className='taskContainer'>
                {sortedTask.map((task, index) => (
                    <div
                        draggable='true'
                        key={task.id}
                        className='bg-[var(--glass-color)] backdrop-blur-3xl px-4! py-3! rounded-2xl cursor-grab group relative w-full'
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
