/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-back': '#26235A',
        'nevi-blue-back':'#3615A2',
        'nevi-purple-back':'#8653CC'
      },
    },
  },
  plugins: [],
}



