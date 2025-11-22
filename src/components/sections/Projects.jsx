import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import Tag from '../ui/Tag'

const PROJECTS = [
  {
    name: 'Humera',
    role: 'Team Lead / Frontend',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'React Query', 'Flowbite', 'Chart.js'],
    tools: ['Jira', 'GitHub', 'Postman', 'AWS', 'Stripe'],
    description:
      'Humera is an advanced AI-powered content moderation and verification platform that ensures data integrity, detects fraud, and streamlines human verification workflows.',
    bullets: [
      'Built an intelligent admin dashboard with modular analytics and real-time KPIs',
      'Customizable drag-and-drop KPI cards for configurable data views',
      'AI-driven verification distinguishing human vs bot interactions',
      'Secure REST API integrations and Stripe-based billing',
      'Role-based access control and AWS deployment',
    ],
  },
  {
    name: 'Matflixx',
    role: 'Software Engineer (Frontend)',
    tech: ['React.js', 'Redux', 'Chart.js', 'React-stockcharts', 'TypeScript', 'SCSS', 'D3.js'],
    tools: ['GitHub', 'ClickUp', 'SendGrid', 'Figma'],
    description:
      'Matflixx is a Germany-based web application delivering comprehensive data on commodities listed on the German stock exchange, focusing on analysis rather than trading.',
    bullets: [
      'Advanced charting with zoom, pan, and customizable timeframes',
      'Handled complex and volatile commodity market data accurately',
      'Balanced intuitive UI with powerful analytics features',
    ],
  },
  {
    name: 'Gut Contact',
    role: 'Software Engineer (Frontend)',
    tech: ['React.js', 'Redux', 'Context API', 'Tailwind CSS', 'Flowbite React'],
    tools: ['Jira', 'GitHub'],
    description:
      'Gut Contact is an employee gamification platform where employees complete tasks to earn chances to play games like slot machine and magic chest for rewards.',
    bullets: [
      'Developed game mechanics like slot machine and magic chest experiences',
      'Flexible reward system for virtual and physical prizes',
      'Role-based platform with four distinct roles',
      'Customizable challenges and prizes to align with goals',
    ],
  },
]

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl transition-all hover:shadow-cyan-500/10"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-white text-xl font-semibold">{p.name}</h3>
          <p className="text-cyan-400/90 text-sm">{p.role}</p>
        </div>
        <button onClick={() => setOpen((v) => !v)} className="text-sm text-slate-200/80 underline underline-offset-4">
          {open ? 'Hide details' : 'View more details'}
        </button>
      </div>
      <p className="mt-3 text-slate-300/90">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 list-disc pl-5 space-y-2 text-slate-300/90"
          >
            {p.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Projects" title="Selected Work" />
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
