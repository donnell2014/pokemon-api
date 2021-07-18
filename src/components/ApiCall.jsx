import React, { useEffect, useState } from "react";
import axios from "axios";
const ApiCall = props => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        // fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        // .then(res => {
        //     return res.json()
        // })
        // .then(res => {
        //     console.log(res)
        //     setPokemon(res.results)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(res => {
            console.log(res)
            setPokemon(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return(
        <div>
            <h1> Api component.</h1>
            <button onClick={(pokemon.map(poke => {
                    return <h3>{poke.name}</h3>
                }))
            }>Fetch Pokemon</button>
            {/* <h3>Name: {pokemon.name}</h3> */}
            {/* <img src={pokemon.sprites.front_default} alt={pokemon.name} /> */}
            {
                pokemon ? 
                pokemon.map(poke => {
                    return <h3>{poke.name}</h3>
                })
                : ""
            }
        </div>
    );
}
export default ApiCall