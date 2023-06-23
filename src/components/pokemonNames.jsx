import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonNames = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(()=> {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res=>{setPokemon(res.data.results)})
    }, [])

    //USING FETCH COMMENTED OUT
    // const getNames = () => {
    //     fetch("https://pokeapi.co/api/v2/pokemon/")
    //     .then((res) => res.json())
    //     .then((data) => setPokemon(data.results))
    //     .catch((err) => console.log(err));
    // };

    return (
        <div>
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
