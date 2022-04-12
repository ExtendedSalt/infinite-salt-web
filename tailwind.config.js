module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nCyan: '#00ffd5',
        nPink: '#ff00d0',
        nRed: '#ff0066',
        nBlue: '#006aff',
        nBlack: '#001713'
      },
      fontFamily: {
        display: ['Prompt'],
        body: ['Prompt'],
      },
      backgroundImage: {
        'Abyss': "url('/public/AbyssBG.jpg')",
      }
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['dark']
  }
}