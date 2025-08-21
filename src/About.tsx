import React from 'react'
import Footer from './Footer'

const About = () => {
  return (
    <>
    <div className="flex items-center justify-between mt-8">
    <div>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-black max-w-3xl ml-3">about</h1>
    <h5 className='mt-9 ml-3 font-normal flex items-center  justify-center max-w-lg'>From my first "Hello World" to building a blog and now being able to build full stack web applications. Software Engineering has been quite the adventure. </h5>
    <p></p>
    </div>
    <img src="images/King.jpg" alt="King's pfp"  className="w-60 h-60 rounded-full object-cover mr-28 flex items-center justify-center" />

   
    </div>
     <Footer/>
     </>
  )
}

export default About