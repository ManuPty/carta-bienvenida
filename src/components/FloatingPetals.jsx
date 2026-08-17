/**
 * FloatingPetals — un puñado de pétalos muy sutiles cayendo.
 * Pocos, lentos y discretos: nunca deben competir con el contenido.
 * Respeta prefers-reduced-motion (ver index.css, la animación se
 * neutraliza globalmente para quienes lo prefieren).
 */
const PETALS = [
  { left: '8%', delay: '0s', duration: '14s', size: 14, opacity: 0.5 },
  { left: '22%', delay: '3s', duration: '17s', size: 10, opacity: 0.4 },
  { left: '48%', delay: '1.5s', duration: '15s', size: 12, opacity: 0.45 },
  { left: '68%', delay: '5s', duration: '18s', size: 9, opacity: 0.35 },
  { left: '82%', delay: '2s', duration: '16s', size: 13, opacity: 0.5 },
  { left: '35%', delay: '7s', duration: '19s', size: 8, opacity: 0.3 },
]

function Petal({ left, delay, duration, size, opacity }) {
  return (
    <span
      aria-hidden="true"
      className="absolute top-0 block"
      style={{
        left,
        width: size,
        height: size * 1.2,
        opacity,
        animation: `petal-fall ${duration} linear ${delay} infinite`,
      }}
    >
      <svg viewBox="0 0 20 24" className="w-full h-full">
        <path
          d="M10 0 C 16 4, 18 14, 10 24 C 2 14, 4 4, 10 0 Z"
          fill="#F8BBD0"
        />
      </svg>
    </span>
  )
}

export default function FloatingPetals({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {PETALS.map((p, i) => (
        <Petal key={i} {...p} />
      ))}
    </div>
  )
}
