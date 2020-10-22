import React from 'react'
import './Intro.style.scss'

const Intro = () => {
    return (
        <div className='intro'>
            <div className="intro_left">
                <h2>More than just
                    shorter links
                </h2>
            <p>  Build your brand’s recognition and get detailed insights on how your links are performing.</p>
            <button className='btn'>Get Started</button>
            </div>
            <div className="intro_right">
                <img src="/images/illustration-working.svg" alt=""/>
            </div>
        </div>
    )
}

export default Intro;
