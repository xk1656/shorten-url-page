import React from 'react';
import './Box.style.scss'

const Box = ({info}) => {
    const {imgUrl, title, text} = info;
    return (
        <div className='box'>
            <div className="box-icon">
            <img src={`${imgUrl}`} alt={title}/>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}

export default Box;
