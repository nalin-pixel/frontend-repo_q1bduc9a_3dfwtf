import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  function onChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function onSubmit(e) {
    e.preventDefault()
    // simplistic client validation
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill in all fields.')
      return
    }
    const emailRe = /[^@\s]+@[^@\s]+\.[^@\s]+/
    if (!emailRe.test(form.email)) {
      setStatus('Please enter a valid email address.')
      return
    }
    setStatus('Thanks! This is a demo form without backend.')
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Contact" title="Get In Touch" />
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="space-y-2 text-slate-300/90">
              <div><span className="text-slate-400">Name:</span> Manthan Parmar</div>
              <div><span className="text-slate-400">Email:</span> <a className="text-cyan-300 hover:underline" href="mailto:themanthan.17@gmail.com">themanthan.17@gmail.com</a></div>
              <div><span className="text-slate-400">Phone:</span> <a className="text-cyan-300 hover:underline" href="tel:+917600460227">+91 7600460227</a></div>
              <div><span className="text-slate-400">Location:</span> Ahmedabad, India</div>
              <div className="pt-2">
                <a href="https://www.linkedin.com/in/manthan-parmar-908736144" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-lg bg-cyan-500/90 px-3 py-2 font-semibold text-slate-900 hover:bg-cyan-400">LinkedIn</a>
                <a href="#" className="ml-3 inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10">GitHub</a>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-slate-300" htmlFor="name">Name</label>
                <input id="name" name="name" value={form.name} onChange={onChange} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-slate-300" htmlFor="email">Email</label>
                <input id="email" name="email" value={form.email} onChange={onChange} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-slate-300" htmlFor="message">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={onChange} rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="How can I help?" />
              </div>
              {status && <div className="text-sm text-slate-300">{status}</div>}
              <div>
                <Button as="button" type="submit">Send Message</Button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
