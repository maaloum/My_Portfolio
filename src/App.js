import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router';
import Leading from './components/Leading/Leading';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Leading/>
    </div>
  );
}

export default App;
