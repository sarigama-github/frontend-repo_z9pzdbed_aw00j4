import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative w-full min-h-[78vh] md:min-h-[86vh] overflow-hidden bg-black">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for brand palette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0" style={{background: 'radial-gradient(1200px 400px at 50% 90%, rgba(245, 194, 92, 0.20), transparent)'}} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs text-blue-100 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
            Real-time hashrate • Institutional-grade controls
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
            Bitcoin mining, managed with precision
          </h1>
          <p className="mt-4 md:mt-6 text-blue-100/90 max-w-2xl">
            Operational visibility, secure asset handling, and rapid deployment—unified in one U.S.-based platform.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-300 text-slate-900 font-medium px-4 py-2 shadow-[0_8px_24px_rgba(245,194,92,0.35)] hover:shadow-[0_10px_28px_rgba(245,194,92,0.5)] transition-shadow">
              Explore capabilities
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/15 text-white px-4 py-2 hover:bg-white/10 transition-colors">
              Talk to our team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
