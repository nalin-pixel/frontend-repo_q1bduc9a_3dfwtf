import React from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-white font-extrabold tracking-tight text-lg">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">MP</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="text-slate-200/90 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                {l.label}
              </motion.a>
            ))}
          </nav>
          <div className="md:hidden">
            {/* simple anchor for mobile to top; links are visible inline via horizontal scroll */}
          </div>
        </div>
        {/* mobile scroller */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-3 no-scrollbar">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-200/90 hover:text-white py-1">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
