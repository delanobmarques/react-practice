import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <>
      <h1>Home</h1>
      <h3> Current user is { username }</h3>
      <p>To update user go to <Link to="/profile">Profile</Link></p>      
    </>
  )
}

export default Home;