import React from 'react'
import SectionTitle from '../../components/sectionTitle'

const workExperience = [
  {
    date: '2014-2018',
    company: 'Forluz',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
    vulputate tristique quam felis. Id phasellus dui orci vulputate
    consequat nulla proin. Id sit scelerisque neque, proin bibendum
    diam.`
  },
  {
    date: '2014-2018',
    company: 'Forluz',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
    vulputate tristique quam felis. Id phasellus dui orci vulputate
    consequat nulla proin. Id sit scelerisque neque, proin bibendum
    diam.`
  },
  {
    date: '2014-2018',
    company: 'Forluz',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
    vulputate tristique quam felis. Id phasellus dui orci vulputate
    consequat nulla proin. Id sit scelerisque neque, proin bibendum
    diam.`
  },
]

function About() {
  return (
    <div className='py-16 text-custom-gray-700 bg-custom-sand-50'>
      <div className='flex flex-row items-center justify-between max-w-5xl mx-auto px-6 sm:flex-row sm:px-10'>
        <div>
          <SectionTitle title="about" />

          <div className='description font-Poppins font-normal leading-7 text-md'>
            <p className='mt-8' style={{ maxWidth: 700 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              vulputate tristique quam felis. Id phasellus dui orci vulputate
              consequat nulla proin. Id sit scelerisque neque, proin bibendum
              diam.
            </p>

            <ul className='list-disc list-outside pl-10 lg:pl-16' style={{ maxWidth: 800 }}>
              {workExperience.map((work, index) => (
                <li className='mt-10' key={index}>
                  <div className='flex items-center font-bold mb-2.5'>
                    <p>{work.date}</p>
                    <p className='mx-6 text-xs opacity-30'>●</p>
                    <p>{work.company}</p>
                  </div>
                  <p>{work.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About