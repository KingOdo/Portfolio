
import type React from 'react'
import './App.css'
import Nav from './Nav'
import ImageGrid from './ImageGrid';

function App() {

  return (
    <>
    <Nav />
    <section className="max-w-5xl px-4 py-20 ml-4 sm:ml-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-snug text-black max-w-3xl">
        Hi, I’m a software engineer, a 2026 graduate. I post regularly about my daily life and projects.
      </h1>
    </section>

    {/*This section contains the image grid */}
    <section>
       <ImageGrid/>
    </section>
   
  <section className="max-w-5xl px-6 py-20 ml-4 sm:ml-12">
    <h4 className="text-lg sm:text-xl md:text-2xl font-normal leading-snug text-black">
     For a while now, I've been looking into a project, I call it Graphers. Its an Uber like app but for photography.
   {/*Lately, I begun working on a side project called Graphers. It's a Uber like app but for photograpers.*/}
    </h4>
    <p>View Project→﻿</p>
  </section>
       

       <footer className="w-full bg-white py-19 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between text-base text-black">
          <div className="mb-8 md:mb-0">
            <h5 >KING</h5>
          </div>
          <div className="space-y-5">
             <p>Follow me on Instagram</p>
        <p>Buisness Email</p>
        <p>Kingodo2004@gmail.com</p>
          </div>
        </div>
        
       
       </footer>
    </>
  )
}

export default App
