import { useState } from 'react';
import './PhotoViewer.css';
import React from "react";


function PhotoViewer(props) {
    

    return (
        <div className="my-class" >

            <img data-testid="main-image" src={props.source} alt='photo' /> 
            <br></br>
            <a className='url-link' href={props.source}> Picture URL: {props.source}</a>
        </div>
    );    
}
export {PhotoViewer}; 
