/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFF7F8',
        'pink-light': '#FCE4EC',
        pink: '#F8BBD0',
        rose: '#E91E63',
        'deep-rose': '#AD1457',
        wine: '#7F1D1D',
        cream: '#FFFDF9',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        script: ['Parisienne', 'cursive'],
      },
      keyframes: {
        'petal-fall': {
          '0%': { transform: 'translateY(-10%) translateX(0) rotate(0deg)', opacity: '0' },
          '8%': { opacity: '0.65' },
          '92%': { opacity: '0.5' },
          '100%': { transform: 'translateY(115vh) translateX(24px) rotate(200deg)', opacity: '0' },
        },
        'sway': {
          '0%, 100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        },
      },
      animation: {
        sway: 'sway 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
