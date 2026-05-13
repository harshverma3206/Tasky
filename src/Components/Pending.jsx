import React, { use, useRef, useState } from 'react'

//Icons
import { RxCross1 } from "react-icons/rx";
import { FaArrowUp } from "react-icons/fa";

const Pending = () => {

    //Refs
    const Priorityref = useRef();

    const Task = [
        {
            name: 'Js Project 02',
            description: 'I have to completed this project in this week lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.',
            priority: 'true',
        },
        {
            name: 'Pranshu Reel Edit',
            description: 'Pranshu Bhai pehle de to de ek baar video',
            priority: 'false',
        },
        {
            name: 'Next Week All Scripts',
            description: 'Kar dunga aaj kuch bhi karke',
            priority: 'true',
        },
        {
            name: 'Calcodesk Website',
            description: '',
            priority: 'false'
        }
    ];

    return (
        <div
            className='bg-[var(--primary-light)] p-4! lg:px-4! lg:rounded-4xl rounded-2xl w-full min-h-[280px] backdrop-blur-2xl'
        >
            <div className='flex justify-between mb-5!'>
                <h2>Pending</h2>
                <h2>{Task.length}</h2>
            </div>

            <div className='flex flex-col gap-2'>
                {Task.map((task, index) => (
                    <div
                        draggable="true"
                        index={index}
                        className='bg-[var(--glass-color)] backdrop-blur-3xl px-4! py-3! rounded-2xl cursor-grab group relative'
                    >
                        <h3>{task.name}</h3>
                        <p>{task.description}</p>
                        <button className='bg-red-700/70 rounded-full p-1.5! cursor-default! active:scale-80 text-red-50 font-bold md:opacity-0 group-hover:opacity-100 fixed top-3 right-3'>
                            <RxCross1 size={7} strokeWidth={1.5} />
                        </button>
                        {task.priority === 'true' && (
                            <button
                                ref={Priorityref}
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
