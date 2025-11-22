import React from 'react'
import { motion } from 'framer-motion'

const base = 'inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-60 disabled:cursor-not-allowed'

const variants = {
  primary: 'bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 focus:ring-cyan-400',
  secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/10 focus:ring-white/30',
  ghost: 'bg-transparent hover:bg-white/10 text-white focus:ring-white/20',
}

export function Button({ as = motion.a, variant = 'primary', className = '', children, ...props }) {
  const Comp = as
  return (
    <Comp
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  )
}

export default Button
