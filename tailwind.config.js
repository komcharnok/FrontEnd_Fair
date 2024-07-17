/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_bg_1: "#fdfdfd",
        dark_bg_2: "#d8d8d8",
        dark_bg_3: "#fdfdfd",
        dark_bg_4: "#fdfdfd",
        dark_border_1: "#222D34",
        dark_border_2: "#313D45",
        dark_hover_1: "#fdfdfd",
        dark_svg_1: "#000000",
        dark_svg_2: "#8696A0",
        blue_1: "#53BDEB",
        blue_2: "#3E7B96",
        dark_text_1: "#000000",
        dark_text_2: "#000000",
        dark_text_3: "#000000",
        dark_text_4: "#000000",
        dark_text_5: "#000000",
        dark_scrollbar: "#374045",
        green_1: "#00A884",
        green_2: "#008069",
        green_3: "#d8d8d8",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
      },
      fontFamily: {
        'Prompt': ["Prompt"]
      }
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
