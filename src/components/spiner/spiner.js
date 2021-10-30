import React from 'react'

//estilos
import './spiner.css'

const Spiner = () => {
    return (
        <div className="spiner-container">
            <svg width="150px"   viewBox="0 0 42 42" >
                <circle className="" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                <circle className="" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#fff" strokeWidth="3"></circle>
                <circle className="spinerD" strokeLinecap="round" data-per="35" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#E6282E" strokeWidth="4" strokeDasharray="70 30" strokeDashoffset="25"></circle>
            </svg>
        </div>
    )
}

export default Spiner
