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
        /** Elite Edition — homepage / brand accent */
        'elite-bg': '#0f0f0f',
        'elite-gold': '#fbbf24',
        'elite-muted': '#a3a3a3',
      },
      fontFamily: {
        sans: [
          'Montserrat',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: ['Montserrat', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'elite-hero-mask':
          'linear-gradient(185deg, rgba(15,15,15,0.88) 0%, rgba(15,15,15,0.55) 45%, rgb(15,15,15) 92%)',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.35)',
        glow: '0 0 0 1px rgba(196, 30, 36, 0.35), 0 8px 40px rgba(196, 30, 36, 0.14)',
        'glow-lg': '0 0 60px rgba(34, 211, 238, 0.12), 0 25px 50px rgba(0, 0, 0, 0.55)',
        'elite-glass': '0 4px 40px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(251,191,36,0.08)',
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.2s ease-in-out infinite',
        aurora: 'aurora-shift 22s ease-in-out infinite alternate',
        'pulse-cta': 'pulse-cta-elite 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'lux-glow': 'lux-glow-pulse 3.2s ease-in-out infinite',
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
        'pulse-cta-elite': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.55' },
          '50%': { transform: 'scale(1.45)', opacity: '0' },
        },
        'lux-glow-pulse': {
          '0%, 100%': {
            boxShadow:
              '0 0 0 1px rgba(251,191,36,0.55), 0 0 32px rgba(251,191,36,0.5), 0 0 72px rgba(251,191,36,0.22), 0 16px 48px rgba(0,0,0,0.55)',
          },
          '50%': {
            boxShadow:
              '0 0 0 1px rgba(254,240,138,0.75), 0 0 48px rgba(251,191,36,0.65), 0 0 100px rgba(251,191,36,0.35), 0 20px 56px rgba(0,0,0,0.6)',
          },
        },
      },
    },
  },
  plugins: [],
};
