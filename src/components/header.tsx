import React from 'react'
import { Link } from 'react-scroll'
import file from '../assets/files/resume-2023.pdf'

function Header() {
  return (
    <div className='border-b-2 border-b-custom-sand-300 h-24 max-w-6xl mx-auto'>
      <div className='flex flex-row items-center justify-between h-full px-6'>
        <span className='text-2xl font-sans font-semibold'>
          João F.
        </span>

        <div className='flex font-Poppins text-md font-light'>
          <Link
            spy
            smooth
            to="about-section"
            className='mx-4 hover:opacity-60 hover:cursor-pointer hover:font-bold transition-all duration-300'
          >
            About
          </Link>
          <Link
            spy
            smooth
            to="work-section"
            className='mx-4 hover:opacity-60 hover:cursor-pointer hover:font-bold transition-all duration-300'
          >
            Work
          </Link>
          <a
            href='../assets/files/resume-2023.pdf'
            target="_blank"
            className='ml-4 hover:opacity-60 transition duration-300 font-semibold'
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header