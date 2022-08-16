import { useContext } from "react";
import { AppContext } from "../App";

const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <>
      <h1>Home</h1>
      <h3> User is { username }</h3>
    </>
  )
}

export default Home;