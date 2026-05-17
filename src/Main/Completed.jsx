import React, { useRef } from 'react'

//Icons
import { RxCross1 } from "react-icons/rx";

const Completed = ({ dragEvent, columnRef }) => {
    return (
        <div
            {...dragEvent}
            ref={columnRef}
            className='transitionClass columnClass'
        >
            <div className='fixed left-0 right-0 top-5 flex justify-between px-6!'>
                <h2>Completed</h2>
                <h2>0</h2>
            </div>

        </div>
    )
}

export default Completed
