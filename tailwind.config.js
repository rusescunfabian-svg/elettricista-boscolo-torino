/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0f14',
        steel: '#1c2530',
        graphite: '#2a3544',
        silver: '#8b96a8',
        accent: '#c41e24',
        'accent-hover': '#9e161b',
      },
      fontFamily: {
        sans: [
          '"DM Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.35)',
        glow: '0 0 0 1px rgba(196,30,36,0.35), 0 8px 40px rgba(196,30,36,0.15)',
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(196,30,36,0.45)' },
          '50%': { boxShadow: '0 0 0 12px rgba(196,30,36,0)' },
        },
      },
    },
  },
  plugins: [],
};
