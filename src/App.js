import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

    const [pokemonData, setPokemonData] = useState ([]);

    useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
          .then(response => {setPokemonData(response.data.results)})
    }, []);


    return (
      <div className="App" style = {{width: '200px', margin: 'auto'}}> 
        <ul>
          {pokemonData.map((pokemonObj, index) =>{
            return (<li key={index}>{pokemonObj.name}</li>)
          })
        }
        </ul>
      </div>
    );
  }


export default App;
