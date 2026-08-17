import { motion, useReducedMotion } from 'framer-motion'
import { Mail, ChevronDown } from 'lucide-react'
import Flower from './Flower.jsx'
import FloatingPetals from './FloatingPetals.jsx'

export default function Hero({ onOpenLetter }) {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-6 py-20"
      style={{
        background:
          'radial-gradient(120% 90% at 50% 0%, #FCE4EC 0%, #FFF7F8 55%, #FFFDF9 100%)',
      }}
    >
      <FloatingPetals />

      <motion.p
        custom={0.1}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative z-10 text-xs sm:text-sm tracking-[0.25em] uppercase text-deep-rose/70 mb-5 text-center"
      >
        Para la persona que hace mis días más bonitos
      </motion.p>

      <motion.h1
        custom={0.3}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative z-10 font-display text-4xl sm:text-5xl md:text-6xl text-wine text-center leading-tight max-w-xl"
      >
        Hay algo que quería decirte&hellip;
      </motion.h1>

      <motion.div
        custom={0.55}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative z-10 w-40 sm:w-48 md:w-56 my-10"
      >
        <Flower />
      </motion.div>

      <motion.button
        custom={0.8}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        onClick={onOpenLetter}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative z-10 inline-flex items-center gap-2 rounded-full bg-rose text-cream px-7 py-3.5 text-sm sm:text-base font-medium shadow-[0_8px_24px_-8px_rgba(173,20,87,0.55)] hover:bg-deep-rose transition-colors duration-300"
      >
        <Mail size={18} strokeWidth={2} aria-hidden="true" />
        Abrir mi carta
      </motion.button>

      {!shouldReduceMotion && (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 z-10 text-deep-rose/50"
          aria-hidden="true"
        >
          <ChevronDown size={22} />
        </motion.div>
      )}
    </section>
  )
}
