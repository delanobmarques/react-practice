import React from 'react'
import { useState, useEffect } from 'react';

const Text = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        console.log('useEfect - component MOUNTED (DidMount)')
    }, []);//Component DidMount - only once

    useEffect(() => {
        console.log('useEfect - component Updated')
    }, [text]);//Component DidMount - And Everytime text is updated (state change)

    useEffect(() => {
        return () => {
            console.log('useEfect - component UNMOUNTED')
        }
    }, []);//Component WillUnmount

  return (
    <>
        <hr style={{ color:"gray", width:"50%"}}></hr>
        <input 
            type="text" 
            onChange={(e) => {
                setText(e.target.value)
            }}  
            value={text}      
        />
        <h2 className='text'>{ text }</h2>
    </>
  )
}

export default Text