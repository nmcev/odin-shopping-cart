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
      products: ['montserrat', 'sans-serif'],
      'montserrat-reg': ['montserrat-reg', 'sans-serif'],
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
        creamy: '#ffffff',
        lilac: '#C8A2C8',
        black: 'rgba(0, 0, 0, 0.5)',
        li: '#D1B3D1',
        dark: '#333333',
        dimGray: '#6a6a6a',
        border: '#cfcfcf',
        orange: '#E48A42',
        silver: '#EFEFEF',
        products: '#1c1b1b'
      },
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
      }
      
    },
  },
  plugins: [],
}

