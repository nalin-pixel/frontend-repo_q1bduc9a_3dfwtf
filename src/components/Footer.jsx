import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-8 text-center text-slate-400 border-t border-white/10">
      © {year} Manthan Parmar. All rights reserved.
      <div className="mt-3">
        <a href="#home" className="text-cyan-400 hover:underline">Back to top</a>
      </div>
    </footer>
  )
}
