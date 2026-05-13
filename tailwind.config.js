/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          snow: '#F4F7FB',       
          iceLight: '#DDE7F1',   
          iceMid: '#AFC7E6',     
          slateBlue: '#5A7FAF',  
          midnight: '#0D1B2A',   
        }
      },
      fontFamily: {
        // Matches the design board typography
        heading: ['"Playfair Display"', 'serif'], 
        body: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}