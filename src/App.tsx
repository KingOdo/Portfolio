
import type React from 'react'
import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import About from "./About";
import Home from "./Home";
import './App.css'
import Graphers from './Graphers';


function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/graphers' element={<Graphers/>} />
    </Routes>
  
    </>
  )
}

export default App
