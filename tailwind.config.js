/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: '120px'
    },
    fontFamily: {
      'poppins': ['"Poppins"', 'serif'],
      'roboto': ['"Roboto"', 'serif']
      
    },
    backgroundImage: {
      'backgroundImg': "url('../assets/backgroundImg.png')"
    },
    extend: {
      colors:{
        'primaryBlue': '#1E86FF',
        'white': '#ffffff',
        'primaryGray': '#B9BDCF',
        'secondaryBlue': '#334680'
      },
      borderRadius: {
        'md': '4px'
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
}

