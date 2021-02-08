import { useState } from 'react';
import './PhotoViewer.css';
import React from "react";


function PhotoViewer(props) {
    
    return (
        <div className="my-class" >

            <img src={props.source} alt='photo' /> 

        </div>
    );    
}
export {PhotoViewer}; 
