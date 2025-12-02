import React, { useEffect, useState } from 'react'
import { CONTACT } from '../constants'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Contact = () => {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  // Put your Web3Forms access key in .env as: VITE_WEB3FORMS_ACCESS_KEY=xxxx
  const accessKey = 'e5d70f3b-014f-4851-b3c7-2c35f1f36ef7'

  useEffect(() => {
    const form = document.getElementById('contact-form')
    if (form) form.reset()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    const formData = new FormData(e.target)
    formData.append('access_key', accessKey)
    formData.append('subject', 'Portfolio Contact – Abishek C')
    formData.append('from_name', 'Abishek C Portfolio')
    formData.append('email_template', 'table')
    // Ensure replies go to the sender's email
    const senderEmail = formData.get('email')
    if (senderEmail) {
      formData.append('replyto', senderEmail)
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setResult('Thanks! I will reply within 24–48 hours.')
        e.target.reset()
      } else {
        setResult('Submission failed. Please try again or email me directly.')
      }
    } catch {
      setResult('Network error. Please retry or use the email link.');
    } finally {
      setLoading(false)
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setResult('Copy failed. Please use the mail link.')
    }
  }

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className='border-t border-stone-900 pb-20'
    >
      <h2 className='my-10 text-center text-4xl'>Contact</h2>

      <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
        {/* Info & trust panel */}
        <div className='text-center lg:text-left tracking-tighter'>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='my-2 text-stone-300'
          >
            Open to freelance projects, collaborations, and technical consulting.
          </motion.p>

          <div className='mt-6 space-y-3'>
            <p className='text-stone-400'>
              <span className='font-medium text-stone-200'>Address:</span> {CONTACT.address}
            </p>
            <p className='text-stone-400'>
              <span className='font-medium text-stone-200'>Phone:</span> {CONTACT.phoneNo}
            </p>
            <p className='text-stone-400 flex items-center justify-center lg:justify-start gap-3'>
              <span className='font-medium text-stone-200'>Email<span className='sr-only'> address</span>:</span>
              <a href={`mailto:${CONTACT.email}?subject=Project%20Inquiry%20%E2%80%93%20Abishek%20C`} className='border-b border-stone-500 hover:text-stone-200'>
                {CONTACT.email}
              </a>
              <button
                type='button'
                onClick={copyEmail}
                className='rounded bg-stone-800 px-3 py-1 text-xs hover:bg-stone-700 transition-colors'
                aria-live='polite'
                title='Copy email'
              >
                Copy
              </button>
              {copied && <span className='text-xs text-stone-200'>Copied!</span>}
            </p>
          </div>

          <p className='mt-6 text-sm text-stone-500'>I reply within 24–48 hours.</p>
        </div>

        {/* Contact form */}
        <div>
          <form id='contact-form' onSubmit={handleSubmit} className='space-y-4 rounded-2xl border border-stone-800 p-6'>
            {/* Honeypot */}
            <input type='text' name='botcheck' className='hidden' tabIndex='-1' autoComplete='off' />

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <div>
                <label htmlFor='name' className='block text-sm text-stone-400'>Name <span className='text-red-400' aria-hidden='true'>*</span></label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  className='mt-1 w-full rounded bg-stone-900 px-3 py-2 text-stone-200 outline-none ring-1 ring-stone-800 focus:ring-stone-600'
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-sm text-stone-400'>Email <span className='text-red-400' aria-hidden='true'>*</span></label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  className='mt-1 w-full rounded bg-stone-900 px-3 py-2 text-stone-200 outline-none ring-1 ring-stone-800 focus:ring-stone-600'
                />
              </div>
            </div>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <div>
                <label htmlFor='project_type' className='block text-sm text-stone-400'>Project Type (optional)</label>
                <input
                  id='project_type'
                  name='project_type'
                  type='text'
                  className='mt-1 w-full rounded bg-stone-900 px-3 py-2 text-stone-200 outline-none ring-1 ring-stone-800 focus:ring-stone-600'
                />
              </div>
              <div>
                <label htmlFor='budget' className='block text-sm text-stone-400'>Budget (optional)</label>
                <input
                  id='budget'
                  name='budget'
                  type='text'
                  className='mt-1 w-full rounded bg-stone-900 px-3 py-2 text-stone-200 outline-none ring-1 ring-stone-800 focus:ring-stone-600'
                />
              </div>
            </div>

            <div>
              <label htmlFor='company' className='block text-sm text-stone-400'>Company (optional)</label>
              <input
                id='company'
                name='company'
                type='text'
                className='mt-1 w-full rounded bg-stone-900 px-3 py-2 text-stone-200 outline-none ring-1 ring-stone-800 focus:ring-stone-600'
              />
            </div>

            <div>
              <label htmlFor='message' className='block text-sm text-stone-400'>Message <span className='text-red-400' aria-hidden='true'>*</span></label>
              <textarea
                id='message'
                name='message'
                rows='5'
                required
                placeholder='Share a few details so I can respond fast.'
                className='mt-1 w-full rounded bg-stone-900 px-3 py-2 text-stone-200 outline-none ring-1 ring-stone-800 focus:ring-stone-600'
              ></textarea>
            </div>

            {/* Disable submit if access key not present */}
            {!accessKey && (
              <p className='text-xs text-amber-400'>Set VITE_WEB3FORMS_ACCESS_KEY in your .env to enable submissions.</p>
            )}

            <button
              type='submit'
              disabled={loading || !accessKey}
              className='w-full rounded-full bg-white px-4 py-3 text-sm font-medium text-stone-900 disabled:cursor-not-allowed disabled:opacity-60 hover:bg-stone-200 hover:scale-[1.01] transition-transform transition-colors'
            >
              {loading ? 'Sending…' : 'Send Message'}
            </button>

            <div aria-live='polite' className='text-sm text-stone-300'>{result}</div>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
