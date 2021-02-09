import logo from './logo.svg';
import './App.css';
import {PhotoViewer} from './PhotoViewer.js'; 
import { ImageSelector } from './ImageSelector';
import React, { useState } from "react";

function App(){
  
   const pictureURLs=[]
        for (let i=0; i<45; i++){
            let randomURL='https://placedog.net/400/400/id='+[i]
            pictureURLs.push(randomURL)
        }
        const[imageURL, setImageURL]=useState(pictureURLs[0]);

  return (
    <div data-testid="content"> 
      <h1> React Photo Viewer</h1>
      <PhotoViewer source={imageURL} />
      <ImageSelector pictureURLs={pictureURLs} imageURL={imageURL} setImageURL={setImageURL}/>
     
    </div>
  );
}

export default App;
