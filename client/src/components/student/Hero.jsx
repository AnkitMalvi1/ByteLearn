import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Unlock Your Potential with Courses Crafted to <span className='text-blue-600'>Match Your Passion.</span><img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' /></h1>

      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Join a global community of learners and experts. Dive into high-quality courses, interactive experiences, and personalized learning paths that empower you to succeed.</p>

      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>Learn from top instructors and take your career to the next level with courses tailored just for you.</p>

      <SearchBar />
    </div>
  )
}

export default Hero