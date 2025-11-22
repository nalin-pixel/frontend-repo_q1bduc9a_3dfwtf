import React from 'react'
import { motion } from 'framer-motion'

export default function SectionTitle({ id, eyebrow, title, subtitle }) {
  return (
    <div id={id} className="mb-10">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="text-cyan-400/80 text-sm font-medium tracking-widest uppercase mb-2"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-slate-300/80 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
