import { useContext } from "react";
import { AppContext } from "../App";
import ChangeProfile from "../components/change-profile.component";

const Profile = () =>  {
  const { username, setUsername } = useContext(AppContext);
  return (
    <>
        <h1>Profile</h1>
        <p>user: {username}</p>
        <ChangeProfile setUserName={setUsername} />        
    </>
    
  )
}

export default Profile;