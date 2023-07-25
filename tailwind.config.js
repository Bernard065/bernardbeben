/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-mont)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#863E96",
        primaryDark: "#58E609",
      },
      backgroundImage: {
        circularDark: 'repeating-radial-gradient(rgba(255, 255, 255, 0.4) 2px, #1b1b1b 5px, #1b1b1b 100px);',
        circularDarkLg: 'repeating-radial-gradient(rgba(255, 255, 255, 0.5) 2px, #1b1b1b 5px, #1b1b1b 80px);',
        circularDarkMd: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px);',
        circularDarkSm: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px);',
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
