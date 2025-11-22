import React from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* background blobs */}
      <motion.div
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"
        animate={{ y: [0, -10, 0], x: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400/90 font-medium tracking-wider uppercase"
        >
          Frontend Developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight"
        >
          Manthan Parmar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-3 text-lg sm:text-xl text-slate-300/90"
        >
          Frontend Developer | React & Next.js Engineer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-slate-300/80 max-w-3xl mx-auto"
        >
          Driven and creative front-end developer with hands-on experience in crafting engaging user interfaces using HTML, CSS, JavaScript, React, and TypeScript. Known for blending innovation with meticulous attention to detail, delivering visually stunning and functional designs. Quick learner with a knack for adapting to new technologies and frameworks. A collaborative problem-solver dedicated to driving project success within fast-paced environments.
        </motion.p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="#projects">View Projects</Button>
          <Button href="/resume.pdf" variant="secondary">Download Resume</Button>
        </div>

        {/* floating card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 text-left shadow-xl"
        >
          <div className="text-slate-200 text-sm">
            <span className="text-cyan-400">const</span> developer = {
            <br />
            &nbsp;&nbsp;name: <span className="text-emerald-400">'Manthan Parmar'</span>,
            <br />
            &nbsp;&nbsp;role: <span className="text-emerald-400">'Frontend / React / Next.js'</span>,
            <br />
            &nbsp;&nbsp;status: <span className="text-emerald-400">'Open to exciting opportunities'</span>
            <br />
            }
          </div>
        </motion.div>
      </div>
    </section>
  )
}
