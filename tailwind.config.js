/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "btn-skin": colors.lime[400],
        "bg-skin": colors.lime[200],
        "txt-skin": colors.zinc[950],
      },
    },
  },
  plugins: [],
};
