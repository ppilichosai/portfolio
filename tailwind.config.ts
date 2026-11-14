import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#061120", 900: "#0a1a2f", 800: "#0f2744", 700: "#173556", line: "#1c3a5c" },
        ink: { DEFAULT: "#e8f0f8", muted: "#a3b5c9" },
        teal: { 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488" },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};
export default config;
