import { useState, useEffect } from 'react';

const Text = () => {
    const [showText, setShowText] = useState(false);
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
        <h1 className="header">Show/ Hide Text</h1>
        <p style={{marginBottom:"1rem"}}>UseEffect Hook example (Lifecycles: Mount, Unmount, update)</p>
        <button 
            onClick={() => {
                setShowText(!showText)
            }}
        >
            Show/Hide Text
        </button>
        { showText &&   
            <>
                <input 
                    type="text" 
                    onChange={(e) => {
                        setText(e.target.value)
                    }}  
                    value={text}      
                />
                <h2 className='text'>{ text }</h2>
            </>
        }
    </>
  )
}

export default Text;