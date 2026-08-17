import { motion, useReducedMotion } from 'framer-motion'

/**
 * Flower — el elemento visual insignia de la página.
 * Una rosa dibujada enteramente en SVG (sin imágenes externas),
 * con una aparición delicada y una respiración muy sutil.
 */
export default function Flower({ className = '' }) {
  const shouldReduceMotion = useReducedMotion()

  const petal = (rotation, scale, color, opacity) => (
    <path
      d="M100 100 C 78 88, 70 58, 92 38 C 106 25, 128 25, 138 40 C 150 58, 140 88, 118 100 C 112 104, 106 104, 100 100 Z"
      fill={color}
      opacity={opacity}
      transform={`rotate(${rotation} 100 100) scale(${scale})`}
      style={{ transformOrigin: '100px 100px' }}
    />
  )

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.svg
        viewBox="0 0 200 280"
        className="w-full h-full"
        role="img"
        aria-label="Una rosa dibujada delicadamente"
        animate={
          shouldReduceMotion
            ? undefined
            : { rotate: [-1.2, 1.2, -1.2] }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 7, repeat: Infinity, ease: 'easeInOut' }
        }
        style={{ transformOrigin: '100px 220px' }}
        whileHover={{ scale: 1.035 }}
      >
        {/* Tallo */}
        <path
          d="M100 150 C 96 185, 104 215, 98 258"
          stroke="#7F1D1D"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />

        {/* Hojas */}
        <path
          d="M99 200 C 78 196, 62 206, 56 224 C 78 226, 96 216, 99 200 Z"
          fill="#AD1457"
          opacity="0.28"
        />
        <path
          d="M100 224 C 120 218, 138 226, 146 242 C 124 246, 106 238, 100 224 Z"
          fill="#7F1D1D"
          opacity="0.22"
        />

        {/* Capa exterior de pétalos */}
        <g opacity="0.95">
          {petal(20, 1.28, '#F8BBD0', 0.9)}
          {petal(92, 1.28, '#F8BBD0', 0.9)}
          {petal(164, 1.28, '#F8BBD0', 0.9)}
          {petal(236, 1.28, '#F8BBD0', 0.9)}
          {petal(308, 1.28, '#F8BBD0', 0.9)}
        </g>

        {/* Capa media */}
        <g opacity="0.95">
          {petal(50, 1.02, '#E91E63', 0.92)}
          {petal(122, 1.02, '#E91E63', 0.92)}
          {petal(194, 1.02, '#E91E63', 0.92)}
          {petal(266, 1.02, '#E91E63', 0.92)}
          {petal(338, 1.02, '#E91E63', 0.92)}
        </g>

        {/* Capa interior */}
        <g>
          {petal(10, 0.72, '#AD1457', 0.95)}
          {petal(82, 0.72, '#AD1457', 0.95)}
          {petal(154, 0.72, '#AD1457', 0.95)}
          {petal(226, 0.72, '#AD1457', 0.95)}
          {petal(298, 0.72, '#AD1457', 0.95)}
        </g>

        {/* Centro */}
        <circle cx="100" cy="100" r="12" fill="#7F1D1D" opacity="0.9" />
      </motion.svg>
    </motion.div>
  )
}
