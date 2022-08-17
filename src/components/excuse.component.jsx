import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Excuse = () => {

    const { isLoading, error, data, isFetching, refetch } = useQuery(["excuse"], () =>
    axios.get("https://excuser.herokuapp.com/v1/excuse")
      .then((res) => res.data[0])
    );

    if (error) {
    return <h1> Sorry, something went wrong. Error: { error }</h1>;
    }

    if (isLoading) {
    return <h1> Loading data...</h1>;
    }
    
    return (
        <>
            <p style={{marginBottom:"1rem"}}>UseQuery Hook example</p>
            <h2>Category: { data.category } </h2>
            <h3 style={{padding:"1rem"}}>{data.excuse}</h3>
            <div style={{padding:"1rem"}}>{isFetching ? "Updating..." : ""}</div>
            <button onClick={refetch}> Update Data </button>
        </>
    )
}

export default Excuse;