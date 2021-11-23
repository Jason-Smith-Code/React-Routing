import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import {
  BrowserRouter as Router, 
  Route, 
  Routes, 
} 
  from 'react-router-dom';
import { render } from 'react-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>   
      </div>
    </Router>

  );
}

const Home = () => {
  return(
    <div className="textContainer">
      <h1>React Routing</h1>
      <p>This is an exercise to learn how to make a react app which utilizes the Router library.</p>
    </div>
  )
}

export default App;
