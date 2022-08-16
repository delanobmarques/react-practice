import { useState } from "react";

const Planets = () => {

    const [textColor, setTextColor] = useState("black");

    const planets = [
        {name:"Mars", isGasPlanet: false},
        {name:"Earth", isGasPlanet: false},
        {name:"Jupiter", isGasPlanet: true},
        {name:"Venus", isGasPlanet: false},
        {name:"Neptune", isGasPlanet: true},
        {name:"Uranus", isGasPlanet: true},
      ]
    
  return (
    <>
        <h1>Planets</h1>
        
        <button
            onClick={ () => { 
                setTextColor(textColor === "black"?"red":"black") 
            }}
        >
            Change color(black/red)
        </button>

        {
            // planets.map((planet, key) => planet.isGasPlanet ? <h2 key={key}>{planet.name} </h2>: null)
            planets.map((planet, key) => planet.isGasPlanet && <h2 key={key} style={{color: textColor}}>{planet.name} </h2>)
        }    
    </>    
  )
}

export default Planets;