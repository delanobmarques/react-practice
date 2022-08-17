import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Age from "./components/age.component";
import Joke from "./components/joke.component";
import Navbar from "./components/navbar.component";
import Planets from "./components/planets.component";
import TaskList from "./components/task-list.component";
import Text from "./components/text.component";
import Home from "./pages/home.page";
import NoMatch from "./pages/no-match.page";
import Profile from "./pages/profile.page";
import ExcusePage from "./pages/excuse.page";
import Register from "./pages/register.page";
import CatFact from "./pages/cat-fact.page";

// create Global context 
export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState('delanomarques');//global state to be passed in context provider

  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>{/*every component inside will have access to the global state*/}
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/age" element={<Age />} />
            <Route path="/joke" element={<Joke />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/tasklist" element={<TaskList />} />
            <Route path="/text" element={<Text />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cat-fact" element={<CatFact />} />
            <Route path="/*" element={<NoMatch />} />            
            <Route path="/excuse" element={<ExcusePage />} />            
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
