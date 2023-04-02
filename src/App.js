import './App.css';
import NavBar from './components/NavBar/NavBar';
import Leading from './components/Leading/Leading';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Leading/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
    </div>
  );
}

export default App;
