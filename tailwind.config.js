/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    daisyui: {
      themes: ["light"],
      fontFamily:{
        'Prompt' : ["Prompt"]
      }
    },
  },
  plugins: [require("daisyui")],
};
