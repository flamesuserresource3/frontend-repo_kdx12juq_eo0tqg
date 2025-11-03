import { motion } from 'framer-motion'

const features = [
  {
    title: 'Feature One',
    copy: 'Concise description that fits the wireframe card layout.',
  },
  {
    title: 'Feature Two',
    copy: 'Another short paragraph describing the value clearly.',
  },
  {
    title: 'Feature Three',
    copy: 'Straight to the point, black and white information.',
  },
]

function FeatureCard({ title, copy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white text-black border-2 border-black p-3 flex flex-col gap-3 focus:outline focus:outline-2 focus:outline-current"
      role="group"
      aria-label={`${title} card`}
    >
      <div className="w-10 h-10 bg-black" aria-label="Icon placeholder" />
      <h3 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {title}
      </h3>
      <p className="text-base font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {copy}
      </p>
    </motion.div>
  )
}

export default function Features() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full bg-white text-black"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f) => (
          <FeatureCard key={f.title} title={f.title} copy={f.copy} />)
        )}
      </div>
    </motion.section>
  )
}
