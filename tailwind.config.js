/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
colors: {
        // Futuristic Electric Blues
        'electric-blue': '#0EA5E9',
        'neon-cyan': '#06B6D4',
        'holographic-purple': '#8B5CF6',
        
        // Deep Space Colors
        'deep-space': '#0A0E1A',
        'void-black': '#0F0F23',
        'cyber-dark': '#1A0B2E',
        
        // Accent Colors
        'cyber-silver': '#A5F3FC',
        'neon-green': '#00FF88',
        'energy-yellow': '#FFE066',
        
        // Legacy Support
        primary: '#0EA5E9',
        secondary: '#06B6D4',
        accent: '#10B981',
        surface: '#1A0B2E',
        background: '#0A0E1A',
        dark: '#0F0F23',
        muted: '#A5F3FC'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
animation: {
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'scale-glow': 'scaleGlow 0.5s ease-out forwards',
        'cyber-pulse': 'cyberPulse 2s ease-in-out infinite',
        'neon-flicker': 'neonFlicker 3s ease-in-out infinite',
        'energy-flow': 'energyFlow 4s linear infinite',
        'gradient': 'animateGradient 3s ease-in-out infinite',
        'matrix-rain': 'matrixRain 10s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(50px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        scaleGlow: {
          to: { 
            transform: 'scale(1.05)', 
            boxShadow: '0 20px 40px -5px rgba(14, 165, 233, 0.4)' 
          }
        },
        cyberPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
            borderColor: 'rgba(0, 255, 255, 0.3)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 255, 255, 0.6)',
            borderColor: 'rgba(0, 255, 255, 0.8)'
          }
        },
        neonFlicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
          '75%': { opacity: '1' },
          '85%': { opacity: '0.9' }
        },
        energyFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        animateGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        }
      }
    },
  },
  plugins: [],
}