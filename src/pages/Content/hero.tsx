import Image from 'next/image'
import React from 'react'
import AvatarImg from './../../assets/avatar.png'
import Instagram from '@mui/icons-material/Instagram'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'

function Hero() {
  return (
    <div className='py-16 text-custom-gray-700 lg:py-24'>
      <div className='flex flex-col items-center justify-between lg:max-w-6xl mx-auto px-6 sm:flex-row sm:px-10 md:max-w-4xl lg:px-24'>
        <div>
          <span className='font-CGaramond text-2xl font-normal'>Hi 👋</span>
          <h1 className='font-CGaramond text-7xl font-semibold my-4'>I'm João.</h1>
          <h3 className='font-sans text-xl'>Front-end & mobile developer from Brazil.</h3>
          <div className='flex mt-10'>
            <LinkedIn
              style={{ fontSize: 32, cursor: 'pointer' }}
              onClick={e => window.open('https://www.linkedin.com/in/frnds-joao/', '_blank')}
            />
            <GitHub
              className='mx-6'
              style={{ fontSize: 32, cursor: 'pointer' }}
              onClick={e => window.open('https://github.com/frndsjoao', '_blank')}
            />
            <Instagram
              style={{ fontSize: 32, cursor: 'pointer' }}
              onClick={e => window.open('https://www.instagram.com/frndsjoao/', '_blank')}
            />
          </div>
        </div>

        <div className='relative h-80 w-80 mt-12'>
          <Image
            src={AvatarImg}
            alt="Avatar-image"
            layout='fill'
            width={0}
            height={0}
            priority
            placeholder='blur'
            className='object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero