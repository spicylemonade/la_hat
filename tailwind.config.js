/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        matcha: '#A6DCA4',
        strawberry: '#FAD0DB',
        cream: '#FFF7EC',
        toast: '#8B5E3C',
        skyPastel: '#B7D5E5'
      },
      fontFamily: {
        headline: ['"Fredoka One"', 'cursive'],
        body: ['Poppins', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        matcha: {
          "primary": "#A6DCA4",
          "secondary": "#FAD0DB", 
          "accent": "#B7D5E5",
          "neutral": "#8B5E3C",
          "base-100": "#FFF7EC",
          "info": "#B7D5E5",
          "success": "#A6DCA4",
          "warning": "#FAD0DB",
          "error": "#f87272",
        },
      },
    ],
  },
} 