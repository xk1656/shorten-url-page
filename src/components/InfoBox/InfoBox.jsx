import React, {useState} from 'react';
import './InfoBox.style.scss'
import copy from 'copy-to-clipboard';

const InfoBox = ({shortenLink, userLink}) => {

    const [copied, setCopy] = useState(false)

    const handleCopy = (e)=>{
        e.preventDefault();
        copy(shortenLink);
        setCopy(!copied);
        
    }
    
    return (
        <div className='info-box'>
            <div className="link">{userLink}</div>
            <div className="shorten-content">
    <div className="shorten-link">{shortenLink}</div>
    <a href="" className={copied ? 'copied-btn' : 'copy-btn'} onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</a>
            </div>
        </div>
    );
}

export default InfoBox;
