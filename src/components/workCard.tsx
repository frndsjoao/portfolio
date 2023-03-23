import React from 'react'
import Image from 'next/image'

interface cardProps {
  image: any;
  name: string;
  description: string;
  techs: string[]
}

function WorkCard({ image, name, description, techs }: cardProps) {
  return (
    <div className='flex flex-col bg-custom-sand-300 rounded-md shadow-md mt-4 sm:flex-row md:flex-col md:mx-1 md:max-w-xl'>
      <div className='relative h-40 w-auto sm:w-96 sm:h-auto md:h-40 md:w-auto'>
        <Image
          src={image}
          alt="Avatar-image"
          layout='fill'
          width={0}
          height={0}
          priority
          placeholder='blur'
          className='object-cover rounded-t-md shadow-sm'
        />
      </div>

      <div className='flex flex-col'>
        <div className='my-4 px-6'>
          <h3 className='text-center text-lg font-bold mb-1'>{name}</h3>
          <p className='text-justify'>{description}</p>
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
      </div>
    </div>
  )
}

export default WorkCard