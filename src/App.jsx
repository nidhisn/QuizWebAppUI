import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import Result from './Components/Result/Result';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/quiz/:category' element={<Quiz />}></Route>
        <Route path='/result' element={<Result />}></Route>
      </Routes>
    </Router>
   
      
    
  );
}

export default App