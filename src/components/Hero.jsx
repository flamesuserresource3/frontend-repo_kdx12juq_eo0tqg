import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function CTAButton({ label, ariaLabel, onClick, invert = false }) {
  const [ripples, setRipples] = useState([])
  const base = invert ? 'bg-white text-black' : 'bg-black text-white'
  const hover = invert ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    const id = Date.now()
    setRipples((prev) => [...prev, { id, x, y, size }])
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 450)
  }

  return (
    <motion.button
      aria-label={ariaLabel}
      onMouseDown={addRipple}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className={`relative overflow-hidden px-5 py-3 text-lg font-bold ${base} ${hover} focus:outline focus:outline-2 focus:outline-current`}
    >
      {label}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
            className="pointer-events-none absolute rounded-full bg-white mix-blend-difference"
          />
        ))}
      </AnimatePresence>
    </motion.button>
  )
}

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full bg-black text-white"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left copy */}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Bold Headline Goes Here
          </h1>
          <p className="text-base font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Short supporting line that stays strictly black and white. No distractions, just clarity.
          </p>
          <div className="flex items-center gap-4">
            <CTAButton ariaLabel="Primary call to action" label="Call To Action" />
            <CTAButton ariaLabel="Secondary action" label="Secondary" invert />
          </div>
        </div>
        {/* Right placeholder image rectangle */}
        <div className="w-full h-64 md:h-96 bg-white" aria-label="Hero image placeholder" />
      </div>
    </motion.section>
  )
}
