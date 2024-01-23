/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'], 
      regPoppins: ['reg-poppins', 'sans-serif'],
      header: ['header', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'home': "url('./src/assets/images/background.jpg')",
      },
      height: {
        'dvh': '100dvh',
        
      },
      margin: {
        '5.5': '5.4rem',
      },
      colors: {
        creamy: '#F5F5F5',
        lilac: '#C8A2C8',
        black: 'rgba(0, 0, 0, 0.5)',
        li: '#D1B3D1',
        dark: '#333333',
        dimGray: '#666666',
        orange: '#E48A42'
      },
      
    },
  },
  plugins: [],
}

