import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",
        graphite: "#171719",
        bone: "#F2F0EA",
        purpleBelt: "#7C5AC4",
        medal: "#CBA96B",
        muted: "#A6A6A8"
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-manrope)", "Manrope", "sans-serif"]
      },
      animation: {
        ticker: "ticker 34s linear infinite",
        "ticker-slow": "ticker 52s linear infinite"
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
