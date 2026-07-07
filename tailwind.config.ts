import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      colors: {
        primary: {
          50: "#f6f5f3",
          100: "#ede9e3",
          200: "#dcd3c6",
          300: "#c3b193",
          400: "#ab9270",
          500: "#8a7355",
          600: "#6f5c45",
          700: "#59493a",
          800: "#493d32",
          900: "#3d332b",
        },
        accent: {
          50: "#f4f6f5",
          100: "#e5eae7",
          200: "#c9d5cd",
          300: "#a3b7ab",
          400: "#7a9686",
          500: "#5c7a67",
          600: "#486052",
          700: "#3c4e43",
          800: "#324038",
          900: "#2a352f",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
