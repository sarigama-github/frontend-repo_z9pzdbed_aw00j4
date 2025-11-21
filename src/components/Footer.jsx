import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 text-blue-100/70 text-sm flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
        <div className="text-center md:text-left">
          <div className="text-white font-semibold">Hashbranch</div>
          <div>U.S. Bitcoin Mining Management</div>
        </div>
        <div className="opacity-80">© {new Date().getFullYear()} Hashbranch, Inc. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
