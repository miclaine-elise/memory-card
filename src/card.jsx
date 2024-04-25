import React from 'react';

export default function Card({ img, clicked, onClick }) {
    let status;
    if (clicked === true) {
        status = "Clicked"
    } else {
        status = "Not Clicked"
    }
    return (
        <div className={["card", clicked].join(' ')} onClick={onClick} >
            <img src={img}></img>
            {/* <p>{status}</p> */}
        </div >
    )
}


