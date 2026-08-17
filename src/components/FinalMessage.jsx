import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

export default function FinalMessage({ onBackToStart }) {
  return (
    <section
      id="final"
      className="relative min-h-[85svh] flex flex-col items-center justify-center px-6 py-24 text-center bg-cream"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Heart size={30} className="text-rose fill-rose mb-8" aria-hidden="true" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-3xl sm:text-4xl md:text-5xl text-wine max-w-lg leading-snug"
      >
        Gracias por ser parte de mi historia.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="font-script text-2xl sm:text-3xl text-rose mt-6"
      >
        Y esto apenas comienza&hellip;
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, delay: 0.7 }}
        onClick={onBackToStart}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="mt-14 inline-flex items-center gap-2 text-deep-rose/70 hover:text-deep-rose text-sm tracking-wide transition-colors duration-300"
      >
        <ArrowUp size={16} aria-hidden="true" />
        Volver al inicio
      </motion.button>
    </section>
  )
}
