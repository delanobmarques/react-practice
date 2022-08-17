import React from 'react'
import useFetch from '../components/use-fetch.component'

const CatFact = () => {
    const { data, loading, error, refetch } = useFetch(`https://catfact.ninja/fact`);

    if (loading) return <h1> Loading data...</h1>

    if(error) return <h1>Sorry, there was an error ({error})</h1>

  return (
    <>
        <h1>Cat Fact</h1>
        <p style={{marginBottom:"1rem"}}>Custom Hook - useFetch</p>
        <h2>{ data?.fact}</h2>
        <button onClick={ refetch }> Refetch</button>        
    </>
  )
}

export default CatFact