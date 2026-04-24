/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          500: '#F59E0B',
        },
        slate: {
          900: '#1E293B',
        },
      },
    },
  },
  plugins: [],
}

