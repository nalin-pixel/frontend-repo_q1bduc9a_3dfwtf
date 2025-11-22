import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="About" title="Who I Am" subtitle="A quick snapshot of my background and interests" />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-slate-300/90 leading-relaxed"
        >
          I’m a frontend-focused engineer with hands-on experience building modern, responsive interfaces with React, Next.js, Tailwind CSS, and TypeScript. I love R&D, prototyping with new tools, and turning ideas into polished, performant experiences. I thrive in fast-paced environments and enjoy collaborating with designers, backend engineers, and stakeholders to ship high-quality products.
        </motion.p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Location', value: 'Ahmedabad, India' },
            { label: 'Role', value: 'Software Engineer (Frontend)' },
            { label: 'Experience', value: '3.5+ years' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200 shadow-lg"
            >
              <div className="text-slate-400 text-xs uppercase tracking-wider">{item.label}</div>
              <div className="mt-2 text-base font-semibold">{item.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
