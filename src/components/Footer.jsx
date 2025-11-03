import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Testimonial strip */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full bg-black text-white"
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-6 text-center flex flex-col items-center gap-3">
          <p className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            “A crisp, black & white experience that communicates clearly.”
          </p>
          <p className="text-base font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            — Satisfied Customer
          </p>
        </div>
      </motion.section>

      {/* Footer links */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full bg-white text-black"
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Product', 'Company', 'Resources', 'Legal'].map((group) => (
            <div key={group} className="flex flex-col gap-3">
              <h4 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>{group}</h4>
              <nav className="flex flex-col gap-2">
                {['Link One', 'Link Two', 'Link Three'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    aria-label={`${group} - ${item}`}
                    className="text-base font-bold focus:outline focus:outline-2 focus:outline-current hover:bg-black hover:text-white px-2 py-1 transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Bottom copyright stripe */}
      <div className="w-full bg-black text-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <p className="text-base font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            © {new Date().getFullYear()} Black & White Co.
          </p>
          <p className="text-base font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Made in monochrome
          </p>
        </div>
      </div>
    </footer>
  )
}
