import './App.css';
import Navbar from './Navbar';
import Home from './Home';
// import  { Routes, Route } from'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
import { Form } from 'react-router-dom';

export default App;
