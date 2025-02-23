import React from 'react';
import project1 from "../assets/project1.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'


const projects = [
    {
      img: project1,
      title: "Project #1",
      description: "UI para desarrollo frontend usando React.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project4,
      title: "Project #3",
      description: "E-commerce platform con varias características.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project5,
      title: "Project #4",
      description: "Una aplicacion mobile usando React Native.",
      links: {
        site: "#",
        github: "#",
      },
    },
    
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            
        ))}
        
    </div>
  )
}

export default Portfolio