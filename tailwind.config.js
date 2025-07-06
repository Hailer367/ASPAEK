/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Skyforge Citadel Theme
        background: '#0C0D12',
        primary: '#3FE0D0',
        secondary: '#9F6CFF',
        gold: '#FFD66B',
        dark: {
          100: '#1A1B23',
          200: '#2A2B35',
          300: '#3A3B47',
          400: '#4A4B59',
          500: '#5A5B6B',
        },
        rune: {
          glow: '#3FE0D0',
          shadow: '#1A4B47',
          particle: '#9F6CFF',
        }
      },
      fontFamily: {
        'rune': ['Cinzel', 'serif'],
        'modern': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'coin-flip': 'coin-flip 1s ease-in-out',
        'rune-glow': 'rune-glow 3s ease-in-out infinite',
        'particle-float': 'particle-float 4s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'bounce-in': 'bounce-in 0.6s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(63, 224, 208, 0.5)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(63, 224, 208, 0.8)',
            transform: 'scale(1.05)'
          },
        },
        'coin-flip': {
          '0%': { transform: 'rotateY(0deg) rotateX(0deg)' },
          '25%': { transform: 'rotateY(90deg) rotateX(180deg)' },
          '50%': { transform: 'rotateY(180deg) rotateX(360deg)' },
          '75%': { transform: 'rotateY(270deg) rotateX(540deg)' },
          '100%': { transform: 'rotateY(360deg) rotateX(720deg)' },
        },
        'rune-glow': {
          '0%, 100%': { 
            textShadow: '0 0 10px rgba(63, 224, 208, 0.5)',
            color: '#3FE0D0'
          },
          '50%': { 
            textShadow: '0 0 20px rgba(159, 108, 255, 0.8)',
            color: '#9F6CFF'
          },
        },
        'particle-float': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '0.7'
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(180deg)',
            opacity: '1'
          },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
        'bounce-in': {
          '0%': { 
            transform: 'scale(0.3) translateY(100px)',
            opacity: '0'
          },
          '50%': { 
            transform: 'scale(1.1) translateY(-10px)',
            opacity: '0.8'
          },
          '100%': { 
            transform: 'scale(1) translateY(0)',
            opacity: '1'
          },
        },
        'slide-up': {
          '0%': { 
            transform: 'translateY(100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'rune-pattern': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%233FE0D0" fill-opacity="0.1"%3E%3Cpath d="M30 30l15-15v30l-15-15zm-15 0l15 15v-30l-15 15z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
