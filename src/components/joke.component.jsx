import React from 'react'
import { useEffect, useState } from 'react';
import Axios from "axios";

function Joke() {
    const [joke, setJoke] = useState({});
    // const URL = `https://api.agify.io/?name=delano`;
    // const URL = `https://catfact.ninja/fact`;
    // const URL = `https://excuser.herokuapp.com/v1/excuse`;
    const URL = `https://v2.jokeapi.dev/joke/Any`;

    const fetchData = () => {
        Axios.get(URL)
            .then((res) => setJoke(res.data))
    }

    useEffect (() => {
        fetchData();
    },[]);

  return (
    <>
        <h1>Joke</h1>
        <button onClick={fetchData}>Get new Joke</button>
        <h3 style={{padding:"1rem"}}>Category: {joke.category}</h3>
        {
            joke.joke?
                <>
                    <p style={{padding:"1rem"}}>{joke.joke}</p>
                </> :
                <>
                    <p style={{padding:"1rem"}}>{joke.setup}</p>
                    <p>{joke.delivery}</p>
                </>
        }
    </>
    
  )
}

export default Joke