import React, { useEffect, useRef, useState, useMemo } from 'react'

//Icons
import { TiPlus } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

//Components
import Pending from './Pending';
import Completed from './Completed';
import Progress from './Progress';

//PendingTask Array
const PendingTask = [
    {
        id: 1,
        name: 'Js Project 02',
        description: 'I have to completed this project in this week lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.',
        priority: true,
    },
    {
        id: 2,
        name: 'Pranshu Reel Edit',
        description: 'Pranshu Bhai pehle de to de ek baar video',
        priority: false,
    },
    {
        id: 3,
        name: 'Next Week All Scripts',
        description: 'Kar dunga aaj kuch bhi karke',
        priority: true,
    },
    {
        id: 4,
        name: 'Calcodesk Website',
        description: '',
        priority: false
    },
    {
        id: 5,
        name: 'Pranshu Reel Edit',
        description: 'Pranshu Bhai pehle de to de ek baar video',
        priority: false,
    },
    {
        id: 6,
        name: 'Next Week All Scripts',
        description: 'Kar dunga aaj kuch bhi karke',
        priority: true,
    },
    {
        id: 7,
        name: 'Calcodesk Website',
        description: '',
        priority: false
    },
    {
        id: 8,
        name: 'Pranshu Reel Edit',
        description: 'Pranshu Bhai pehle de to de ek baar video',
        priority: false,
    },
    {
        id: 9,
        name: 'Next Week All Scripts',
        description: 'Kar dunga aaj kuch bhi karke',
        priority: true,
    },
    {
        id: 10,
        name: 'Calcodesk Website',
        description: '',
        priority: true
    }
];

// const progressTask = [
//     {
//         id: 1,
//         name: 'Js Project 02',
//         description: 'I have to completed this project in this week lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.',
//         priority: true,
//     },
//     {
//         id: 2,
//         name: 'Pranshu Reel Edit',
//         description: 'Pranshu Bhai pehle de to de ek baar video',
//         priority: false,
//     },
//     {
//         id: 3,
//         name: 'Next Week All Scripts',
//         description: 'Kar dunga aaj kuch bhi karke',
//         priority: true,
//     },
//     {
//         id: 4,
//         name: 'Calcodesk Website',
//         description: '',
//         priority: false
//     },
//     {
//         id: 5,
//         name: 'Pranshu Reel Edit',
//         description: 'Pranshu Bhai pehle de to de ek baar video',
//         priority: false,
//     },
//     {
//         id: 6,
//         name: 'Next Week All Scripts',
//         description: 'Kar dunga aaj kuch bhi karke',
//         priority: true,
//     },
//     {
//         id: 7,
//         name: 'Calcodesk Website',
//         description: '',
//         priority: false
//     },
//     {
//         id: 8,
//         name: 'Pranshu Reel Edit',
//         description: 'Pranshu Bhai pehle de to de ek baar video',
//         priority: false,
//     },
//     {
//         id: 9,
//         name: 'Next Week All Scripts',
//         description: 'Kar dunga aaj kuch bhi karke',
//         priority: true,
//     },
//     {
//         id: 10,
//         name: 'Calcodesk Website',
//         description: '',
//         priority: true
//     }
// ];

const Hero = () => {

    const [progressTask, setProgressTask] = useState([null])
    const [completedTask, setCompletedTask] = useState([])

    //Sort task as Priority
    const sortedTask = useMemo(() => (
        [...PendingTask].sort((a, b) => b.priority - a.priority)
    ), [PendingTask])

    // useRefs
    const pendingRef = useRef();
    const progressRef = useRef();
    const completedRef = useRef();
    const dragElementRef = useRef();

    //Function of Drag Handler
    const DragHandle = (columnRef) => ({
        onDragEnter: (e) => {
            e.preventDefault();
            columnRef.current.classList.add("HighlightClass");
        },
        onDragLeave: (e) => {
            e.preventDefault();
            if (columnRef.current.contains(e.relatedTarget)) return;
            columnRef.current.classList.remove("HighlightClass");
        },
        onDrop: (e) => {
            e.preventDefault();
            columnRef.current.classList.remove("HighlightClass");
            console.log(columnRef);
            console.log(dragElementRef.current);
            columnRef.appendChild(dragElementRef)
        },
        onDragOver: (e) => {
            e.preventDefault();
        }
    })

    return (
        <div className='bg-[var(--primary-black)] p-5! md:px-10! sm:px-7! lg:px-13! relative min-h-screen flex flex-col'>
            <button className='fixed bottom-10 right-10 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 p-5! active:scale-90 transition-all rounded-full text-2xl bg-[var(--primary-dark)] text-[var(--primary-extra-light)]'>
                <TiPlus />
            </button>

            <h1 className='lg:px-10! fixed top-5 left-5'>Tasky</h1>

            {/* Board */}
            <div className='transitionClass flex flex-col lg:flex-row gap-5 lg:gap-3 justify-between mt-20! lg:grow pb-8!'>
                <Pending
                    onTaskDragStart={(task) => (dragElementRef.current = task)}
                    Tasks={sortedTask}
                    dragEvent={DragHandle(pendingRef)}
                    columnRef={pendingRef}
                />
                <Progress
                    Tasks={progressTask}
                    dragEvent={DragHandle(progressRef)}
                    columnRef={progressRef}
                />
                <Completed
                    Tasks={completedTask}
                    dragEvent={DragHandle(completedRef)}
                    columnRef={completedRef}
                />
            </div>
        </div>
    )
}

export default Hero
