import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router';
import Leading from './components/Leading/Leading';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Leading/>
        <About/>
        <Skills/>
        <Project/>
    </div>
  );
}

export default App;
