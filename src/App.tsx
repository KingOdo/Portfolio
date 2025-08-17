
import type React from 'react'
import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import About from "./About";
import Home from "./Home";
import './App.css'


function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  
    </>
  )
}

export default App
