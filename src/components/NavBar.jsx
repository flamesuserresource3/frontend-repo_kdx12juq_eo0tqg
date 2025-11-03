import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Simple pressable element with scale on hover and ripple on tap
function Pressable({
  as: Component = 'button',
  children,
  className = '',
  ariaLabel,
}) {
  const [ripples, setRipples] = useState([])

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
    <motion.div
      whileHover={{ scale: 1.05, backgroundColor: '#000000', color: '#FFFFFF' }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className={`relative select-none ${className}`}
      onMouseDown={addRipple}
      role={Component === 'a' ? 'link' : 'button'}
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {/* Content */}
      {children}
      {/* Ripple(s) - solid circle expand, no opacity changes */}
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
    </motion.div>
  )
}

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full bg-white text-black"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" aria-label="Home" className="focus:outline focus:outline-2 focus:outline-current">
          <div className="w-10 h-10 bg-black" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {['Features', 'Pricing', 'About'].map((item) => (
            <Pressable
              key={item}
              as="a"
              ariaLabel={`Navigate to ${item}`}
              className="px-3 py-2 text-lg font-bold focus:outline focus:outline-2 focus:outline-current bg-white text-black"
            >
              <a href="#" className="block">
                {item}
              </a>
            </Pressable>
          ))}
          <Pressable ariaLabel="Get Started" className="px-4 py-2 text-lg font-bold bg-black text-white focus:outline focus:outline-2 focus:outline-current">
            <button type="button">Get Started</button>
          </Pressable>
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden px-3 py-2 font-bold bg-black text-white focus:outline focus:outline-2 focus:outline-current"
        >
          Menu
        </button>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black text-white"
          >
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-4 flex flex-col gap-4">
              {['Features', 'Pricing', 'About'].map((item) => (
                <a
                  key={item}
                  href="#"
                  aria-label={`Navigate to ${item}`}
                  className="px-3 py-2 text-lg font-bold focus:outline focus:outline-2 focus:outline-current bg-black text-white hover:bg-white hover:text-black transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
              <button
                aria-label="Get Started"
                className="px-4 py-2 text-lg font-bold bg-white text-black focus:outline focus:outline-2 focus:outline-current hover:bg-black hover:text-white transition-colors duration-200"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
