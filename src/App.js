import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router';
import Leading from './components/Leading/Leading';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Leading/>
        <About/>
        <Skills/>
    </div>
  );
}

export default App;
