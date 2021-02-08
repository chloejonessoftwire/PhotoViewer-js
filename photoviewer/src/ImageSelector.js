import './ImageSelector.css';
import {PhotoViewer} from './PhotoViewer.js'; 
import React from "react";
var lower=0;
var upper=1000
function ImageSelector() {
    {/* some kind of use state here */ }
    const pictureURLs=[<img src={'https://picsum.photos/id/237/200/200'} alt='photo' />]
        for (let i=0; i<45; i++){
            pictureURLs.push(<PhotoViewer source={'https://placedog.net/200/200/id='+(Math.floor(Math.random()*(upper-lower))+lower)} />)

        }
        

    
    return (
        <div className="my-class" >
            
            <p> Select your photo </p>
            <ul>{pictureURLs}</ul>

        </div>
    );    
}
export {ImageSelector}; 
{/* <img src={'https://placedog.net/200/200/id='+(Math.floor(Math.random()*(upper-lower))+lower)} alt='photo' /> */}