import React, { useState } from "react";

const PokemonNames = () => {
    const [pokemon, setPokemon] = useState([]);

    const getNames = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((res) => res.json())
        .then((data) => setPokemon(data.results))
        .catch((err) => console.log(err));
    };
    return (
        <div>
        <button onClick={getNames}>click</button>
        <div>
            <ul>{pokemon.map((names, index) => {
                return <li key={index}>{names.name}</li>;
            })
            }</ul>
        </div>
        </div>
    );
};

export default PokemonNames;
