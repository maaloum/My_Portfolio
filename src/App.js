import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router';
import Leading from './components/Leading/Leading';
import About from './components/About/About';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Leading/>
        <About/>
    </div>
  );
}

export default App;
