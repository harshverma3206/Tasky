import React, { useRef } from 'react'

import { RxCross1 } from "react-icons/rx";
import { FaArrowUp } from "react-icons/fa";

const Progress = ({ dragEvent, columnRef, Tasks }) => {

    //useRef
    const taskRef = useRef([])

    return (
        <div
            {...dragEvent}
            ref={columnRef}
            id='progress'
            className='transitionClass columnClass'

        >
            <div className='fixed left-0 right-0 top-5 flex justify-between px-6!'>
                <h2>Progress</h2>
                <h2>0</h2>
            </div>
            <div className='taskContainer'>
                {Tasks.map((task, index) => (
                    <div
                        ref={(el) => (taskRef.current[index] = el)}
                        onDrag={(e) => {
                            onTaskDragStart(task)
                        }}
                        draggable='true'
                        key={task.id}
                        className='bg-[var(--glass-color)] backdrop-blur-3xl px-4! py-3! rounded-2xl cursor-grab group relative w-full'
                    >
                        <h3>{task.name}</h3>
                        <p>{task.description}</p>
                        <button
                            className='bg-red-700/70 rounded-full p-1.5! cursor-default! active:scale-80 text-red-50 font-bold md:opacity-0 group-hover:opacity-100 fixed top-3 right-3'>
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

export default Progress
