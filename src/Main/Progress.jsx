import React, { useRef } from 'react'

const Progress = ({ dragEvent, columnRef }) => {
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
        </div>
    )
}

export default Progress
