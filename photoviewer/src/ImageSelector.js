import './ImageSelector.css';
import {PhotoViewer} from './PhotoViewer.js'; 
import React, { useState } from "react";

var lower=0;
var upper=1000
function ImageSelector(props) {
    
   

    
    return (
        <div className="my-class" >
            
            <p> Select your photo </p>
            {props.pictureURLs.map(url => {
                return <img  data-testid={"ButtonImage"+url} className={url == props.imageURL ? 'selected-pic': 'un-selectedpic'}  src={url} alt='photo' onClick={() => props.setImageURL(url)} />
            })}
        </div>
    );    
}
export {ImageSelector}; 
{/* <img src={'https://placedog.net/200/200/id='+(Math.floor(Math.random()*(upper-lower))+lower)} alt='photo' /> */}