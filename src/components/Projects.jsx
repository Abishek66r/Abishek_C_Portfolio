import React from 'react'
import { PROJECTS } from '../constants'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'


const Projects = () => {
  return (
    <div className='pb-4'>
      <motion.h2
        whileInView={{opacity:  1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className='my-20 text-center text-4xl'>Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
         <div key={index} className='relative mb-24 md:mb-8 rounded-xl bg-stone-900/30 p-2 md:p-6 pb-10 flex flex-col items-center md:items-start justify-center gap-0 md:flex-row md:gap-8 lg:justify-center'>
           <motion.div 
             whileInView={{opacity: 1, x:0}}
             initial={{opacity: 0, x: -100}}
             transition={{duration: 1}}
             className='w-full md:w-1/3'>
           <picture>
              <source srcSet={project.webp} type="image/webp" />
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className='mt-1 md:mt-0 mb-0 w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] rounded-lg mx-auto object-cover h-auto shadow-sm'
                loading='lazy'
                decoding='async'
                sizes='(min-width: 768px) 300px, (min-width: 640px) 260px, 220px'
              />
            </picture>
           </motion.div>
           <motion.div 
             whileInView={{opacity:  1, x:0}}
             initial={{opacity: 0, y: 100}}
             transition={{duration: 1}}
             className='w-full md:w-2/3 space-y-1 text-center md:text-left'>
             <h3 className='-mt-2 md:mt-0 font-semibold leading-tight text-xl sm:text-2xl tracking-tight'>{project.title}</h3>
             <p className='text-stone-400 text-xs sm:text-sm md:text-base leading-relaxed break-words md:max-w-[60ch]' style={{ textAlign: 'justify', textJustify: 'inter-word' }}>{project.description}</p>
             <div className='w-full flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mt-2 mb-4 md:mb-0'>
               {project.technologies.map((tech, index) => (
                 <span
                   key={index}
                   className='rounded bg-stone-900 px-2 py-1 text-xs sm:text-sm font-medium text-stone-300'
                 >
                   {tech}
                 </span>
               ))}
             </div>
           </motion.div>
         </div>
       ))}
     </div>
  </div>
  )
}

export default Projects
