import { useContext, useState } from "react"
import { AppContext } from "../App";

const ChangeProfile = () => {  
  const [newUsername, setNewUsername] = useState('');
  const { setUsername } = useContext(AppContext);
  return (
    <>  
      <p style={{marginBottom:"1rem"}}>UseContext Hook example</p>
      <input 
        type="text" 
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <button 
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        Change username
      </button>
    </>
  )
}

export default ChangeProfile;