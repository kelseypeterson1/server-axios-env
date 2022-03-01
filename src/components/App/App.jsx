
import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App () {

  const [gifs, setGifs] = useState([]);

  const handleClick = () => {
    axios.get('/giphy')
      .then(response => setGifs(response.data.data))
      .catch(error => console.log(error))
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">APIS</h1>
          <h4><i>APIS</i></h4>
          <button onClick={handleClick}>GIMME GIPHY</button>
        </header>
          {
            gifs.map((image, i) => (
              <img key={i} src={image.images.fixed_height.url} />
            ))
          }
        <br/>
      </div>
    );
  
}

export default App;
