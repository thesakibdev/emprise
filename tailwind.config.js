/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1600px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      // color
      colors: {
        "BrandOne": "#E81A46",
        "BrandTwo": "#F5A623",
        "StatGray": "#212529",
        "OxfordBlue": "#1D293F",
        "CadetGray": "#99A3AD",
        "Slate Gray": "#546179",
      },
      backgroundImage: {
        "BannerOne": "url('../src/assets/BG-Image.png')",
        "BannerTwo": "url('../src/assets/Hero.png')",
      }
    },
  },
  plugins: [],
};
