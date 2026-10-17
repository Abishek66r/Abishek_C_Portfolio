import React, { useEffect, useState } from 'react'
import profilePic from "../assets/new_portfolio_pic.png";
import profilePicWebp from "../assets/new_portfolio_pic.webp";
import { HERO_CONTENT, HERO_DESIGNATIONS } from "../constants/index.js"
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';



const containerVariants = {
    hidden : { opacity: 0, x:-100 },
    visible : {
        opacity: 1,
        x:0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVarients = {
    hidden: {opacity:0 , x:-100,},
    visible: {
        opacity: 1,
        x:0,
        transition: {
            duration: 0.5
        }
    }
}

const Hero = () => {
  const [typed, setTyped] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let designationIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let typingTimeout;

    const animateDesignation = () => {
      const designation = HERO_DESIGNATIONS[designationIndex];

      if (deleting) {
        characterIndex -= 1;
        setTyped(designation.slice(0, characterIndex));

        if (characterIndex === 0) {
          deleting = false;
          designationIndex = (designationIndex + 1) % HERO_DESIGNATIONS.length;
          typingTimeout = setTimeout(animateDesignation, 350);
          return;
        }

        typingTimeout = setTimeout(animateDesignation, 45);
        return;
      }

      characterIndex += 1;
      setTyped(designation.slice(0, characterIndex));

      if (characterIndex === designation.length) {
        deleting = true;
        typingTimeout = setTimeout(animateDesignation, 1200);
        return;
      }

      typingTimeout = setTimeout(animateDesignation, 75);
    };

    typingTimeout = setTimeout(animateDesignation, 200);

    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 400);

    return () => {
      clearTimeout(typingTimeout);
      clearInterval(cursorInterval);
    };
  }, []);

  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
  return (
    <div className='pb-4 lg:mb-36'>
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:p-8'>
                    {isMobile ? (
                      <picture>
                        <source srcSet={profilePicWebp} type="image/webp" />
                        <img src={profilePic} alt="Abishek" className='border border-stone-900 rounded-3xl' 
                          width={500}
                          height={500}
                          decoding='async' 
                          loading='eager'
                          fetchpriority='high'
                          sizes="(max-width: 768px) 100vw, 50vw" />
                      </picture>
                    ) : (
                      <motion.picture 
                        initial={{ x: 100, opacity:0}}
                        animate={{ x:0, opacity:1}}
                        transition={{duration:1, delay:1.5}}
                      >
                        <source srcSet={profilePicWebp} type="image/webp" />
                        <img src={profilePic} alt="Abishek" className='border border-stone-900 rounded-3xl' 
                          width={500}
                          height={500}
                          decoding='async' 
                          loading='eager'
                          fetchpriority='high'
                          sizes="(max-width: 768px) 100vw, 50vw" />
                      </motion.picture>
                    )}
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className='flex flex-col items-center lg:items-start mt-10'>
                    <motion.h1 
                        variants={childVarients}
                        className='pb-2 text-3xl sm:text-4xl tracking-tight lg:text-8xl leading-tight'>Abishek C</motion.h1>   
                    <motion.span 
                        variants={childVarients}
                        className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-xl sm:text-2xl md:text-3xl tracking-tight text-transparent'>
                        {typed}
                        <span className={`ml-1 text-stone-300 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
                    </motion.span>  
                    <motion.p 
                        variants={childVarients}
                        className='my-2 max-w-lg py-6 text-base sm:text-lg md:text-xl leading-relaxed lg:text-left'
                        style={{ textAlign: "justify", textJustify: "inter-word" }}
                        >{HERO_CONTENT}</motion.p>
                    <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                      <motion.a
                        variants={childVarients}
                        href="/Abishek New Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="group rounded-full px-6 py-3 text-base font-medium bg-white/10 backdrop-blur-sm border border-white/20
                                    hover:bg-white hover:text-black hover:border-transparent
                                    text-white tracking-wide
                                    shadow-[0_0_16px_rgba(255,255,255,0.30)] hover:shadow-[0_0_28px_rgba(255,255,255,0.60)]
                                    transition-all duration-300 hover:scale-105
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                      >
                        <span className="group-hover:text-black">Download Resume</span>
                      </motion.a>
                      <motion.a
                        variants={childVarients}
                        href="https://www.instagram.com/builtbyabishek/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Built by Abishek freelance studio on Instagram"
                        className="rounded-full border border-stone-700 px-5 py-3 text-sm font-medium tracking-wide text-stone-200 transition-colors hover:border-stone-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                      >
                        Freelance studio · @builtbyabishek
                      </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero
