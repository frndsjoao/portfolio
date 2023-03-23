import React from 'react'
import SectionTitle from '../../components/sectionTitle'

const workExperience = [
  {
    date: '2019-2021',
    company: 'Somar Soluções - Support Analyst',
    description: `Worked as help-desk support for an ERP system in Blumenau/BR, 
    assisting users and providing consultancy for process improvement and ERP-Banking
    System integrations.`
  },
  {
    date: '2021-2022',
    company: 'UniversalPrev - Jr. Fullstack Developer',
    description: `Developed websites in the private pension industry using techs
    like ReactJS, Typescript and Styled-Components, making backend adjustments by
    MySQL and Maker Tool (flowchart/SQL based).`
  },
  {
    date: '2022-now',
    company: 'Forluz - Jr. Mobile Developer',
    description: `I'm a member of the developer team, making a new version
    of the mobile app (Android and iOS) for Forluz's users, using techs like React
    Native, Typescript, Redux and Styled-Components and making new features for it.`
  },
]

function About() {
  return (
    <div id="about-section" className='py-16 text-custom-gray-700 bg-custom-sand-50'>
      <div className='flex flex-row items-center justify-between max-w-5xl mx-auto px-6 sm:flex-row sm:px-10'>
        <div>
          <SectionTitle title="about" />

          <div className='description font-Poppins font-normal leading-7 text-md'>
            <p className='mt-8' style={{ maxWidth: 700 }}>
              I'm a Brazilian junior developer, with about two years of experience
              and currently working as Mobile Developer at Forluz. I have bachelor's
              degree in System Informations, always looking to build quality
              applications and websites.
            </p>
            <p className='mt-2' style={{ maxWidth: 700 }}>
              Current stack and technologies: ReactJS and React Native, NextJS,
              Redux, Typescript and Javascript, Styled-Components, Tailwind, SQL and Git.
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
              )).reverse()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About