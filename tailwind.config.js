/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["Fredoka"],
      },
      lineHeight: {
        '10': '6rem',
      },
      fontSize: {
        '9xl': '12rem',
      },
      height: {
        '128': '32rem',
      },
      colors: {
        playerX: "#DCBF3F",
        playerO: "#72CFF9",
        background: "#5A1E76",
      },
    },
  },
  plugins: [],
}

