/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: { 
        'lg': '1024px',
        '3xl': '1610px', },
      fontFamily: {
        nobile: ["Nobile", "serif"],
        actor: ["Actor", "sans-serif"],
        tiltWarp: ["'Tilt Warp'", "cursive"],
      },
      colors: {
        primaryText: "#E7E7E7",
        heroTitle: "#F9F6F2",
        btnBg: "#1677FF",
        formTitle: "#11162E",
        navMenuLink: "#F9F6F2",
      },
      boxShadow: {
        primary: "0px 4px 4px 0px #00000040",
      },
    },
  },
  plugins: [],
};
