/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        void: '#030712',
        ink: '#0a0f14',
        steel: '#111827',
        graphite: '#1e293b',
        silver: '#94a3b8',
        accent: '#c41e24',
        'accent-hover': '#9e161b',
        electric: '#22d3ee',
        aurora: '#a5f3fc',
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
        display: ['Outfit', 'DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.35)',
        glow: '0 0 0 1px rgba(196, 30, 36, 0.35), 0 8px 40px rgba(196, 30, 36, 0.14)',
        'glow-lg': '0 0 60px rgba(34, 211, 238, 0.12), 0 25px 50px rgba(0, 0, 0, 0.55)',
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.2s ease-in-out infinite',
        aurora: 'aurora-shift 22s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(196, 30, 36, 0.45)' },
          '50%': { boxShadow: '0 0 0 14px rgba(196, 30, 36, 0)' },
        },
        'aurora-shift': {
          '0%': { transform: 'translate(0%, 0%) scale(1)' },
          '100%': { transform: 'translate(-6%, 4%) scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
};
