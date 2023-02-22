/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: "'Josefin Sans', 'serif'",
      },colors: {
        "yellow-1000": "#FFE031",
      },
    },
  },
  plugins: [],
}
