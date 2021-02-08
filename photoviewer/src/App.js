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
 //create an image selector.js file for current photoviewer
 //new photoviwer which is just one image props.src to image tag
 
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
