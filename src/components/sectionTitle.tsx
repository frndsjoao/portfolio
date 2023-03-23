import React from 'react'

function SectionTitle({ title }: any) {
  return (
    <div className='section-title'>
      <h2 className='font-sans text-3xl font-extrabold'>{title}.</h2>
      <div className='w-9 h-2 bg-custom-blue-800 mt-2' />
    </div>
  )
}

export default SectionTitle