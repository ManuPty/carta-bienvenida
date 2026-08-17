import { motion } from 'framer-motion'
import { Heart, Image as ImageIcon } from 'lucide-react'

// ─────────────────────────────────────────────────────────────
// ✏️  EDITA AQUÍ EL TEXTO DE TU CARTA
// Cada elemento del arreglo es un párrafo. Agrega, elimina o
// reescribe los que quieras — no necesitas tocar nada más
// en este archivo para cambiar el mensaje.
// ─────────────────────────────────────────────────────────────
const LETTER_PARAGRAPHS = [
  '[Aquí escribiré mi carta para ella]',
  '[Puedes contar cómo se conocieron, qué sientes, o simplemente lo que quieras decirle hoy]',
  '[Este espacio es tuyo — bórralo y escribe con tus propias palabras]',
]

const SIGNATURE = 'Con todo mi corazón.'

export default function Letter({ onViewMemories }) {
  return (
    <section
      id="carta"
      className="relative min-h-[100svh] flex items-center justify-center px-5 sm:px-6 py-20 bg-pink-light/40"
    >
      <div className="relative w-full max-w-md sm:max-w-lg">
        {/* Sobre decorativo detrás de la carta */}
        <div
          aria-hidden="true"
          className="absolute -inset-4 sm:-inset-6 rounded-[2rem] bg-pink/70"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -inset-4 sm:-inset-6 rounded-[2rem] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-pink to-pink-light/60" />
          <div
            className="absolute left-0 right-0 top-0 h-24 sm:h-28 bg-deep-rose/25"
            style={{ clipPath: 'polygon(0 0, 50% 55%, 100% 0)' }}
          />
        </div>

        {/* Papel de la carta */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl bg-cream px-6 py-10 sm:px-10 sm:py-12 shadow-[0_20px_60px_-20px_rgba(127,29,29,0.35)]"
        >
          <Heart
            size={20}
            className="absolute -top-3 -right-3 text-rose fill-rose"
            aria-hidden="true"
          />

          <h2 className="font-display text-3xl sm:text-4xl text-deep-rose mb-8 text-center">
            Para ti, mi amor
          </h2>

          <div className="space-y-5 text-wine/90 leading-relaxed text-[15px] sm:text-base">
            {LETTER_PARAGRAPHS.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <p className="font-script text-2xl sm:text-3xl text-rose mt-8 text-center">
            {SIGNATURE}
          </p>

          <div className="flex justify-center mt-2">
            <Heart size={16} className="text-pink" aria-hidden="true" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={onViewMemories}
            className="inline-flex items-center gap-2 rounded-full border border-rose/40 text-deep-rose px-6 py-3 text-sm sm:text-base font-medium hover:bg-rose hover:text-cream hover:border-rose transition-colors duration-300"
          >
            <ImageIcon size={17} strokeWidth={2} aria-hidden="true" />
            Ver nuestros recuerdos
          </button>
        </motion.div>
      </div>
    </section>
  )
}
