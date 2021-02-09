import logo from './logo.svg';
import './App.css';
import {PhotoViewer} from './PhotoViewer.js'; 
import { ImageSelector } from './ImageSelector';

function App(){
  return (
    <div> 
      <h1> React Photo Viewer</h1>
      <PhotoViewer source='https://picsum.photos/id/237/400/400'/>
      <ImageSelector/>
     
    </div>
  );
}

export default App;
