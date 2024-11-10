import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // fontFamily:{
      //   Plex :["IBM Plex Mono"]
      // }
      keyframes: {
        fade: {
          '0%, 50%': { opacity: '1' },
          '25%, 75%': { opacity: '0' },
        },
      },
      animation: {
        fade: 'fade 3s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
