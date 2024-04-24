import React from 'react';

export default function Card({ img, clicked, onClick }) {
    return (
        <div className={["card", clicked].join(' ')} onClick={onClick} >
            <img src={img}></img>
        </div >
    )
}


