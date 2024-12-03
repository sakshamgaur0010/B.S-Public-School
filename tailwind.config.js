/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],          // Body text font
        handwriting: ['Patrick Hand', 'cursive'],  // Heading font
      },
    },
  },
  plugins: [],
}
