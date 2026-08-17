import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { memories } from '../data/memories.js'

const SIZE_CLASSES = {
  tall: 'sm:row-span-2',
  wide: 'sm:col-span-2',
  normal: '',
}

function MemoryCard({ image, caption, size, index }) {
  const [failed, setFailed] = useState(false)

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.015 }}
      className={`group relative overflow-hidden rounded-2xl shadow-[0_10px_30px_-14px_rgba(127,29,29,0.3)] aspect-[4/5] ${SIZE_CLASSES[size] || ''}`}
    >
      {!failed ? (
        <img
          src={image}
          alt={caption}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        // Placeholder elegante mientras no exista la fotografía real
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-light via-pink to-pink-light">
          <Heart size={28} className="text-cream/80" aria-hidden="true" />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-wine/70 via-wine/0 to-wine/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <span className="font-script text-lg sm:text-xl text-cream">
          {caption}
        </span>
      </figcaption>
    </motion.figure>
  )
}

export default function Memories() {
  return (
    <section
      id="recuerdos"
      className="relative px-5 sm:px-8 py-24 sm:py-28 bg-background"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14 sm:mb-16"
      >
        <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-deep-rose/60 mb-3">
          Un pequeño archivo
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-wine">
          Nuestros recuerdos
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 sm:auto-rows-[180px]">
        {memories.map((memory, index) => (
          <MemoryCard key={memory.image} index={index} {...memory} />
        ))}
      </div>
    </section>
  )
}
