import React from 'react'
import Instagram from '@mui/icons-material/Instagram'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'

function Footer() {
  return (
    <div className='py-8 pb-10 text-custom-gray-700 bg-custom-sand-50'>
      <div className='max-w-5xl mx-auto px-6'>
        <span className='font-CGaramond text-3xl font-bold'>Say hello</span>

        <div className='flex flex-col mt-4 text-lg sm:flex-row'>
          <div className='flex-1 text-center'>
            <p>For work or other stuffs, send an email to</p>
            <a
              href='mailto: joaofernandes.dev@hotmail.com'
              className='font-bold hover:tracking-wider transition-all'
            >
              joaofernandes.dev@hotmail.com
            </a>
          </div>

          <div className='flex-1 text-center mt-6 sm:mt-0'>
            <p> Or get in touch via social media:</p>
            <div className='icons flex flex-row mt-2 items-center justify-center'>
              <LinkedIn style={{ fontSize: 32 }} />
              <GitHub className='mx-6' style={{ fontSize: 32 }} />
              <Instagram style={{ fontSize: 32 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer