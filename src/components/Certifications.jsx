import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';

const Certifications = () => {
  return (
    <div className='pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Certifications
      </motion.h2>

      <div className='grid gap-6 md:grid-cols-2'>
        {CERTIFICATIONS.map((certification, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='rounded-2xl border border-stone-800 bg-stone-900/30 p-6 shadow-[0_0_30px_rgba(255,255,255,0.04)]'
          >
            <div className='mb-4 inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300'>
              Verified
            </div>
            <h3 className='text-xl font-semibold text-white'>{certification.title}</h3>
            <div className='mt-4 space-y-2 text-sm text-stone-300'>
              <p>
                <span className='font-medium text-stone-200'>Result:</span> {certification.result}
              </p>
              <p>
                <span className='font-medium text-stone-200'>Achievement date:</span> {certification.date}
              </p>
              {certification.expiry && (
                <p>
                  <span className='font-medium text-stone-200'>Recorded expiry:</span> {certification.expiry}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
