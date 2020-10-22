import React, {useState} from 'react';
import './ShortenBox.style.scss'
import InfoBox from '../InfoBox/InfoBox';

const ShortenBox = () => {
    const  [userLink, setUserLink] = useState(null);
    const [shortenLink, setShortenLink] = useState('');
    const [validLink, setValidLink] = useState(true);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        if(checkUrl(userLink)){
            var tkn = "e26abcf25fc774a193088e518f0ccdc5f0e9379d";
            await fetch("https://api-ssl.bitly.com/v4/shorten", {
              method: "POST",
              headers: {
                Authorization: "Bearer " + tkn,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                long_url: userLink,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                setShortenLink(data.link)
              });
            setValidLink(true)
        }
        else {setValidLink(false);
        setShortenLink('')}
        

       
    }
    const handleChange = e => {
        const link = e.target.value;
        const httpsLink = addHttps(link);
        setUserLink(httpsLink);
    }
    const addHttps = (link) => {
        var httpsLink = link;
        if (!link.includes("https://")) {
          httpsLink = "https://" + link;
        }
        return httpsLink;
    }
    const checkUrl =  (urlString) =>{
        if(urlString!=""){
            var reg=/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
            if(!reg.test(urlString)){
                return false;
            }
            else return true;
        }
    }
    return (
        <div>
        <div className='shorten'>
            <form className='form' onSubmit={handleSubmit}>
                <input placeholder="Shorten a link here…" onChange={handleChange} className={(validLink ? '':'error')} />
                <button type="submit" className='shorten-btn'>Shorten It!</button>
                
            </form>
            { validLink ? '':<small>Please enter a valid link</small>}
        </div>
        {
            shortenLink && <div className="info-boxes">
            <InfoBox userLink={userLink} shortenLink={shortenLink}  />
            </div>
        }
       
        
        
        
        </div>
    );
}

export default ShortenBox;
