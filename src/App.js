import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Age from "./components/age.component";
import Joke from "./components/joke.component";
import Navbar from "./components/navbar.component";
import Planets from "./components/planets.component";
import TaskList from "./components/task-list.component";
import Text from "./components/text.component";
import Home from "./pages/home.page";
import NoMatch from "./pages/no-match.page";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/age" element={<Age />} />
          <Route path="/joke" element={<Joke />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/tasklist" element={<TaskList />} />
          <Route path="/text" element={<Text />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </Router>
      {/* <Text />
      <Planets/>      
      <Age/>
      <TaskList />
      <Joke/> */}
    </div>
  );
}

export default App;
