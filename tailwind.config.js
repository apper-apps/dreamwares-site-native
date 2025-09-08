/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
colors: {
        primary: '#8B5CF6',
        secondary: '#EC4899',
        accent: '#A855F7',
        surface: '#1A1B2E',
        background: '#0A0B1E',
        dark: '#0A0B1E',
        muted: '#9CA3AF'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'scale-glow': 'scaleGlow 0.3s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        scaleGlow: {
          to: { transform: 'scale(1.05)', boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.3)' }
        }
      }
    },
  },
  plugins: [],
}