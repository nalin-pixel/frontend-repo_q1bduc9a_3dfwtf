import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import Tag from '../ui/Tag'

const groups = [
  {
    title: 'Core Frontend',
    items: ['HTML5', 'CSS', 'SASS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js'],
  },
  {
    title: 'State & UI',
    items: ['Redux', 'ANT Design', 'Flowbite React'],
  },
  {
    title: 'Backend / CMS / Services',
    items: ['Strapi.js', 'Firebase', 'GraphQL'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Hetzner'],
  },
  {
    title: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'Husky', 'ESLint', 'Stripe', 'Jira', 'Linear', 'Trello', 'ClickUp', 'Postman', 'SendGrid', 'Figma'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Skills" title="What I Work With" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: gi * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
            >
              <div className="text-white font-semibold">{g.title}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
