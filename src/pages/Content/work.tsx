import React from 'react'
import SectionTitle from '../../components/sectionTitle'
import WorkCard from '../../components/workCard'
import CoverImg from './../../assets/cover.png'

const projectArray = [
  {
    image: CoverImg,
    name: '2014-2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Ut sed aliquam sollicitudin rhoncus morbi.`,
    techs: ['Javascript', 'React', 'Node.js', 'Styled-components', 'Tailwind', 'Git']
  },
  {
    image: CoverImg,
    name: '2014-2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Ut sed aliquam sollicitudin rhoncus morbi.`,
    techs: ['Javascript', 'React', 'Node.js', 'Styled-components', 'Tailwind', 'Git']
  },
  {
    image: CoverImg,
    name: '2014-2018',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Ut sed aliquam sollicitudin rhoncus morbi.`,
    techs: ['Javascript', 'React', 'Node.js', 'Styled-components', 'Tailwind', 'Git']
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
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work