import React from 'react'

const Footer = () => {
  return (
   
     <footer className="w-full bg-white  py-19 px-6 md:px-12 lg:px-46">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-48 items-start">
          <div className="mb- 6 md:mb-0">
            <h5 className="text-lg font-medium">KING</h5>
          </div>

          <div className=" flex flex-col space-y-3 text-gray-900">
             <a href='https://instagram.com/kingm.odo/' target='_blank'>Follow me on <span className='underline'>Instagram</span></a>
        <p>Business Email</p>
        <p>Kingodo2004@gmail.com</p>
          </div>
        </div>
        
       
       </footer>
  )
}

export default Footer