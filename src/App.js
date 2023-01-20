import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [pokemon, setpokemon] = useState()
  const [loading, setloading] = useState(true)

  function getPoke() {

    let num = Math.ceil(Math.random() * 905);
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
      .then(res => res.json())
      .then(
        (result) => {
          setpokemon(result)
          setloading(false)
        },
        (error) => {
          console.log(error)
          setloading(false)
        }
      )
  }


  useEffect(() => {
    setloading(true)
    getPoke()
  }, []);
  if (loading) {
    return (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    )
  } else {
    return (
      <div className="App">
        <h1>{pokemon.id} - {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        <div className='pokemon'>
          <div className='box-left'>
            <img src={pokemon.sprites.front_default} />
          </div>
          <div className='box-right'>
            <h3>Stats</h3>
            <p>HP: {pokemon.stats[0].base_stat}
              <div className='wrapper'>
                <div style={{ height: "10px", width: `${pokemon.stats[0].base_stat / 2.55}%`, backgroundColor: `hsl(${pokemon.stats[0].base_stat}, 100%, 50%)` }}>
                </div>
              </div>
            </p>
            <p>Attack: {pokemon.stats[1].base_stat}
            <div className='wrapper'>
                <div style={{ height: "10px", width: `${pokemon.stats[1].base_stat / 1.81}%`, backgroundColor: `hsl(${pokemon.stats[1].base_stat}, 100%, 50%)` }}>
                </div>
              </div>
              </p>
            <p>Defense: {pokemon.stats[2].base_stat}
            <div className='wrapper'>
                <div style={{ height: "10px", width: `${pokemon.stats[2].base_stat / 2.3}%`, backgroundColor: `hsl(${pokemon.stats[2].base_stat}, 100%, 50%)` }}>
                </div>
              </div>
              </p>
            <p>Special Attack: {pokemon.stats[3].base_stat}
            <div className='wrapper'>
                <div style={{ height: "10px", width: `${pokemon.stats[3].base_stat / 1.8}%`, backgroundColor: `hsl(${pokemon.stats[3].base_stat}, 100%, 50%)` }}>
                </div>
              </div>
              </p>
            <p>Special Defense: {pokemon.stats[4].base_stat}
            <div className='wrapper'>
                <div style={{ height: "10px", width: `${pokemon.stats[4].base_stat / 2.3}%`, backgroundColor: `hsl(${pokemon.stats[4].base_stat}, 100%, 50%)` }}>
                </div>
              </div>
              </p>
            <p>Speed: {pokemon.stats[5].base_stat}
            <div className='wrapper'>
                <div style={{ height: "10px", width: `${pokemon.stats[5].base_stat / 2}%`, backgroundColor: `hsl(${pokemon.stats[5].base_stat}, 100%, 50%)` }}>
                </div>
              </div>
              </p>
          </div>
        </div>
        <button onClick={() => getPoke()}>
          Randomize
        </button>
      </div>
    );
  }
}

export default App;
