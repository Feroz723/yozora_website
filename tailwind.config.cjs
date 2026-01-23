/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        surface: '#050816',
        surfaceAlt: '#0b1020',
        primary: '#6b4bff',
        primarySoft: '#9782ff',
        accent: '#22d3ee',
        accentSoft: '#38bdf8',
        foreground: '#e5e7eb',
        muted: '#9ca3af',
        border: '#1f2933'
      },
      fontFamily: {
        display: ['system-ui', 'sans-serif'],
        body: ['system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 60px rgba(129, 140, 248, 0.45)'
      },
      animation: {
        shimmer: 'shimmer 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slower': 'spin 12s linear infinite'
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(-45deg)' },
          '100%': { transform: 'translateX(200%) translateY(200%) rotate(-45deg)' }
        }
      }
    }
  },
  plugins: []
};

