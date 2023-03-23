import React from 'react'

function Header() {
  return (
    <div className='border-b-2 border-b-custom-sand-300 h-24 max-w-6xl mx-auto'>
      <div className='flex flex-row items-center justify-between h-full px-6'>
        <span className='text-2xl font-sans font-semibold'>
          João F.
        </span>

        <div className='flex font-Poppins text-md font-light'>
          <button className='mx-4 hover:opacity-60 transition duration-300'>About</button>
          <button className='mx-4 hover:opacity-60 transition duration-300'>Work</button>
          <button className='ml-4 hover:opacity-60 transition duration-300 font-semibold'>
            Resume
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header