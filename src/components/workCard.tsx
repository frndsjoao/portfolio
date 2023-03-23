import React from 'react'
import Image from 'next/image'
import GitHub from '@mui/icons-material/GitHub'
import Language from '@mui/icons-material/Language'

interface cardProps {
  image: any;
  name: string;
  description: string;
  techs: string[];
  url?: string;
  github?: string;
}

function WorkCard({ image, name, description, techs, url, github }: cardProps) {
  return (
    <div className='lg:h-auto flex flex-col bg-custom-sand-300 rounded-md shadow-md mt-4 sm:flex-row md:flex-col md:mx-2 md:w-72'>
      {image && (
        <a href={url}>
          <div className='relative h-44 w-auto sm:w-96 sm:h-auto md:h-44 md:w-auto'>
            <Image
              src={image}
              alt="Avatar-image"
              layout='fill'
              width={0}
              height={0}
              priority
              placeholder='blur'
              className='object-cover rounded-t-md shadow-sm blur-sm hover:blur-none transition-all duration-300 p-1 object-top'
            />
          </div>
        </a>
      )}

      <div className='flex flex-col my-auto'>
        <div className='my-4 px-6'>
          <h3 className='text-center text-lg font-bold mb-1'>{name}</h3>
          <p className='text-justify text-sm'>{description}</p>
        </div>

        <div className='px-2 text-center mb-3 mt-1'>
          {techs.map(tech => (
            <span
              className='inline-block bg-custom-sand-50 px-3.5 py-1 m-1 rounded-full shadow-sm'
            >
              {tech}
            </span>
          ))}
        </div>

        <div className='w-full text-custom-sand-50 flex items-start justify-evenly mb-6 mt-2'>
          {github && (
            <GitHub
              className=' hover:text-custom-gray-700 transition-all'
              style={{ fontSize: 32, cursor: 'pointer' }}
              onClick={e => window.open(github, '_blank')}
            />
          )}
          {url && (
            <Language
              className=' hover:text-custom-gray-700 transition-all'
              style={{ fontSize: 32, cursor: 'pointer' }}
              onClick={e => window.open(url, '_blank')}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default WorkCard