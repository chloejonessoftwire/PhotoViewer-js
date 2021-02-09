import './ImageSelector.css';
import {PhotoViewer} from './PhotoViewer.js'; 
import React, { useState } from "react";

var lower=0;
var upper=1000
function ImageSelector() {
    

    {/* some kind of use state here  onClick={setViewPhoto(randomURL)} */ }
    const pictureURLs=['https://picsum.photos/id/237/200/200']
        for (let i=0; i<45; i++){
            let randomURL='https://placedog.net/200/200/id='+[i]
            pictureURLs.push(randomURL)
        }
        const[imageURL, setImageURL]=useState(pictureURLs[0]);
        
           

    
    return (
        <div className="my-class" >
            
            <p> Select your photo </p>
            {pictureURLs.map(url => {
                return <img className={url == imageURL ? 'selected-pic': 'un-selectedpic'}  src={url} alt='photo' onClick={() => setImageURL(url)} />
            })}
        </div>
    );    
}
export {ImageSelector}; 
{/* <img src={'https://placedog.net/200/200/id='+(Math.floor(Math.random()*(upper-lower))+lower)} alt='photo' /> */}