import React from 'react';
import './App.scss';
import Home from './components/Home.js';
import Characters from './components/Characters.js';
import Planets from './components/Planets.js';
import Starships from './components/Starships.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/planets" element={<Planets />}></Route>
        <Route path="/starships" element={<Starships />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
