import { useState } from "react";
import Age from "./components/age.component";
import Joke from "./components/joke.component";
import Planets from "./components/planets.component";
import TaskList from "./components/task-list.component";
import Text from "./components/text.component";

function App() {

  const [showText, setShowText] = useState(false);
  
  return (
    <div className="App">
      <h1 className="header">My App</h1>
      <button 
        onClick={() => {
          setShowText(!showText)
        }}
      >
        Show text
      </button>
      { showText && <Text />}            
      <Planets/>      
      <Age/>
      <TaskList />
      <Joke/>
    </div>
  );
}

export default App;
