import React from 'react'
import SectionTitle from '../../components/sectionTitle'
import WorkCard from '../../components/workCard'
import CoverImg from './../../assets/cover.png'
import Neverland from './../../assets/neverland.png'
import WeddingImg from './../../assets/mariejoao.png'

const projectArray = [
  {
    image: WeddingImg,
    name: 'João & Mari Wedding',
    description: `Wedding website created to provide relevant informations to the guests.`,
    techs: ['React', 'NextJS', 'Typescript', 'Sass', 'Nodemailer'],
    url: 'https://www.mariejoao.day/',
    github: 'https://github.com/frndsjoao/joaoemari-day'
  },
  {
    image: Neverland,
    name: 'Neverland Tables',
    description: `Website created as a portfolio for displaying models of board game tables.`,
    techs: ['React', 'NextJS', 'Typescript', 'Sass'],
    url: 'https://neverland-tables.vercel.app/',
    github: 'https://github.com/frndsjoao/neverland-tables'
  },
  {
    image: CoverImg,
    name: 'Forluz App',
    description: `Mobile application used by Forluz pension plan participants,
    where they can track their investments.`,
    techs: ['React Native', 'Typescript', 'Redux', 'Styled-Components'],
    url: 'https://apps.apple.com/br/app/forluz/id1195834897',
    github: ''
  }
]

function Work() {
  return (
    <div id="work-section" className='pt-16 text-custom-gray-700 pb-20'>
      <div className='flex flex-row items-center justify-center max-w-5xl mx-auto px-6 sm:flex-row sm:px-10'>
        <div>
          <SectionTitle title="work" />

          <div className='flex flex-1 flex-col px-4 sm:px-10 md:flex-row md:px-0 mt-7'>
            {projectArray.map((item, index) => (
              <WorkCard
                key={index}
                image={item.image}
                name={item.name}
                description={item.description}
                techs={item.techs}
                github={item.github}
                url={item.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work