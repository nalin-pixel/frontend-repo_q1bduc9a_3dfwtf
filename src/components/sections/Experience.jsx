import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

const ROLES = [
  {
    period: 'Jan 2022 – Jun 2022',
    title: 'Software Engineer – Intern',
    bullets: [
      'Assisted in building and maintaining frontend features using React and JavaScript.',
      'Collaborated with senior engineers on best practices and deployment workflows.',
      'Contributed to fixing UI bugs and improving usability.',
    ],
  },
  {
    period: 'Jul 2022 – Dec 2023',
    title: 'Junior Software Engineer (Frontend)',
    bullets: [
      'Owned feature development using React, Next.js, and Tailwind CSS.',
      'Shipped pixel-perfect, responsive UI with designers and backend devs.',
      'Implemented APIs, state management, and performance improvements.',
      'Participated in code reviews and internal component libraries.',
    ],
  },
  {
    period: 'Jan 2024 – Present',
    title: 'Software Engineer (Frontend)',
    bullets: [
      'Leading frontend for key projects and mentoring juniors.',
      'Designing scalable UI architecture and reusable systems.',
      'Driving best practices around TypeScript, testing, and performance.',
      'Partnering with product to ship user-centric solutions.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Experience" title="Scaletech Solution Pvt. Ltd." />
        <div className="relative border-l border-white/10 ml-4">
          {ROLES.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative pl-6 py-6"
            >
              <span className="absolute -left-1.5 top-6 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
              <div className="text-slate-400 text-sm">{r.period}</div>
              <div className="text-white font-semibold mt-1">{r.title}</div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-300/90">
                {r.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
