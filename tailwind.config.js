module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false,
   theme: {
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [require("daisyui")],

   daisyui: {
    styled: true,
    themes: [
      {
        custom_theme: {
          "primary": "#bbc7a4",
          "secondary": "#d6dbd2",
          "accent": "#e75a7c",
          "neutral": "#191D24",
          "base-100": "#f2f5ea",
          "info": "#bfdbfe",
          "success": "#d9f99d",
          "warning": "#fed7aa",
          "error": "#fda4af",
        },
      },
      "cupcake",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
 }