//import React from 'react'
import ImageGrid from './ImageGrid';
import Footer from './Footer';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
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
    <p className="flex items-center border-4 justify-center border-transparent text-xl mt-1 font-semibold h-40 w-80 mx-auto"> Idea: “I need a photographer. Where can I find, book, and pay one easily?”</p>
   <Link to='/graphers'> <p className='mt-9 underline'>View Project →</p></Link>
  </section>
 { /*This section contains the footer */}
 <Footer/>
       
    </>
  )
}

export default Home