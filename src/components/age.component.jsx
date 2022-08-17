import React from 'react'
import { useState } from 'react'

const Age = () => {
    const [age, setAge] = useState(0);

    const increaseAge = () => {
        setAge( age + 1 );
    }

    const decreaseAge = () => {
        setAge( age-1 );
    }

    const setToZero = () => {
        setAge(0);
    }

  return (
    <>
        <h1>Age</h1>
        <p style={{marginBottom:"1rem"}}>UseState Hook example</p>
        <h3>{ age }</h3>
        <button onClick={increaseAge}>
            Increase Age
        </button>
        <button onClick={decreaseAge}>
            Decrease Age
        </button>
        <button onClick={setToZero}>
            Set to zero
        </button>
    </>
  )
}

export default Age