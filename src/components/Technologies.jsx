import React from 'react'
import { FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaPython } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiTailwindcss, SiMysql, SiDjango, SiJavascript, SiExpress, SiPostman, SiSqlite, SiGit, SiOpenai } from 'react-icons/si';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const iconvariants = (duration) => ({
  initial: { y: -6 },
  animate: {
    y: [6, -6],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  },
});

const Technologies = () => {
  return (
    <div className='pb-24'>
      <motion.h2 
        whileInView={{ opacity: 1, y:0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>
        Technologies
      </motion.h2>

      <div className='grid gap-8 md:grid-cols-2'>
      {/* Frontend */}
      <motion.div 
        whileInView={{ opacity: 1, x:0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.1 }}
        className='mb-4 rounded-xl border border-stone-700/50 bg-stone-900/30 p-6'>
        <motion.h3
          whileInView={{ opacity: 1, y:0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className='text-xl font-semibold text-stone-200 mb-4 tracking-wide'>Frontend</motion.h3>
        <div className='flex flex-wrap items-center justify-center gap-6'>
          {/* React */}
          <motion.div variants={iconvariants(2.5)} initial="initial" animate="animate" className='relative group' aria-label="React">
            <RiReactjsLine className='text-7xl text-cyan-400 transition-transform duration-200 group-hover:scale-105' />
            <span className='mt-2 block text-center text-xs text-stone-300'>React</span>
          </motion.div>
          {/* TailwindCSS */}
          <motion.div variants={iconvariants(3.8)} initial="initial" animate="animate" className='relative group' aria-label="Tailwind CSS">
            <SiTailwindcss className='text-7xl text-sky-400 transition-transform duration-200 group-hover:scale-105' />
            <span className='mt-2 block text-center text-xs text-stone-300'>Tailwind CSS</span>
          </motion.div>
          {/* JavaScript */}
          <motion.div variants={iconvariants(4.5)} initial="initial" animate="animate" className='relative group' aria-label="JavaScript">
            <SiJavascript className='text-7xl text-yellow-400 transition-transform duration-200 group-hover:scale-105' />
            <span className='mt-2 block text-center text-xs text-stone-300'>JavaScript</span>
          </motion.div>
          {/* HTML */}
          <motion.div variants={iconvariants(2)} initial="initial" animate="animate" className='relative group' aria-label="HTML">
            <FaHtml5 className='text-7xl text-orange-500 transition-transform duration-200 group-hover:scale-105' />
            <span className='mt-2 block text-center text-xs text-stone-300'>HTML</span>
          </motion.div>
          {/* CSS */}
          <motion.div variants={iconvariants(3)} initial="initial" animate="animate" className='relative group' aria-label="CSS">
            <FaCss3Alt className='text-7xl text-blue-600 transition-transform duration-200 group-hover:scale-105' />
            <span className='mt-2 block text-center text-xs text-stone-300'>CSS</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Backend */}
      <motion.div 
        whileInView={{ opacity: 1, x:0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.1 }}
        className='mb-4 rounded-xl border border-stone-700/50 bg-stone-900/30 p-6'>
        <motion.h3
          whileInView={{ opacity: 1, y:0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className='text-xl font-semibold text-stone-200 mb-4 tracking-wide'>Backend</motion.h3>
        <div className='flex flex-wrap items-center justify-center gap-6'>
          {/* Django */}
          <motion.div variants={iconvariants(3)} initial="initial" animate="animate" className='relative group' aria-label="Django">
            <SiDjango className='text-7xl text-green-700 transition-transform duration-200 group-hover:scale-105' />
            <span className='mt-2 block text-center text-xs text-stone-300'>Django</span>
          </motion.div>
          {/* Node.js */}
          <motion.div variants={iconvariants(2)} initial="initial" animate="animate" className='relative group' aria-label="Node.js">
            <FaNodeJs className='text-7xl text-green-900 transition-transform duration-200 group-hover:scale-105' />
            <span className='mt-2 block text-center text-xs text-stone-300'>Node.js</span>
          </motion.div>
          {/* Express */}
          <motion.div variants={iconvariants(4)} initial="initial" animate="animate" className='relative group' aria-label="Express">
            <SiExpress className='text-7xl transition-transform duration-200 group-hover:scale-105' />
            <span className='mt-2 block text-center text-xs text-stone-300'>Express</span>
          </motion.div>
          {/* Python */}
          <motion.div variants={iconvariants(5)} initial="initial" animate="animate" className='relative group' aria-label="Python">
            <FaPython className='text-7xl text-yellow-500 transition-transform duration-200 group-hover:scale-105' />
            <span className='mt-2 block text-center text-xs text-stone-300'>Python</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Databases */}
      <motion.div 
        whileInView={{ opacity: 1, x:0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.1 }}
        className='mb-4 rounded-xl border border-stone-700/50 bg-stone-900/30 p-6'>
        <motion.h3
          whileInView={{ opacity: 1, y:0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className='text-xl font-semibold text-stone-200 mb-4 tracking-wide'>Databases</motion.h3>
        <div className='flex flex-wrap items-center justify-center gap-6'>
          {/* MongoDB */}
          <motion.div variants={iconvariants(3.5)} initial="initial" animate="animate" className='relative group' aria-label="MongoDB">
            <SiMongodb className='text-7xl text-green-700 transition-transform duration-200 group-hover:scale-105' />
            <span className='mt-2 block text-center text-xs text-stone-300'>MongoDB</span>
          </motion.div>
          {/* MySQL */}
          <motion.div variants={iconvariants(5)} initial="initial" animate="animate" className='relative group' aria-label="MySQL">
            <SiMysql className='text-7xl text-blue-500 transition-transform duration-200 group-hover:scale-105' />
            <span className='mt-2 block text-center text-xs text-stone-300'>MySQL</span>
          </motion.div>
          {/* SQLite */}
          <motion.div variants={iconvariants(2.2)} initial="initial" animate="animate" className='relative group' aria-label="SQLite">
            <SiSqlite className='text-7xl text-blue-400 transition-transform duration-200 group-hover:scale-105' />
            <span className='mt-2 block text-center text-xs text-stone-300'>SQLite</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Tools */}
      <motion.div 
        whileInView={{ opacity: 1, x:0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.1 }}
        className='mb-4 rounded-xl border border-stone-700/50 bg-stone-900/30 p-6'>
        <motion.h3
          whileInView={{ opacity: 1, y:0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className='text-xl font-semibold text-stone-200 mb-4 tracking-wide'>Tools</motion.h3>
        <div className='flex flex-wrap items-center justify-center gap-6'>
          {/* Git */}
          <motion.div variants={iconvariants(4.2)} initial="initial" animate="animate" className='relative group' aria-label="Git">
            <SiGit className='text-7xl text-red-600 transition-transform duration-200 group-hover:scale-105' />
            <span className='mt-2 block text-center text-xs text-stone-300'>Git</span>
          </motion.div>
          {/* GitHub */}
          <motion.div variants={iconvariants(6)} initial="initial" animate="animate" className='relative group' aria-label="GitHub">
            <FaGithub className='text-7xl transition-transform duration-200 group-hover:scale-105' />
            <span className='mt-2 block text-center text-xs text-stone-300'>GitHub</span>
          </motion.div>
          {/* Postman */}
          <motion.div variants={iconvariants(5)} initial="initial" animate="animate" className='relative group' aria-label="Postman">
            <SiPostman className='text-7xl text-orange-500 transition-transform duration-200 group-hover:scale-105' />
            <span className='mt-2 block text-center text-xs text-stone-300'>Postman</span>
          </motion.div>
        </div>
      </motion.div>
      </div>
    </div>
  )
}

export default Technologies;
