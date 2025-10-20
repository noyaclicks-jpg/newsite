import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0080C6',
          green: '#6AC259',
          navy: '#0F172A',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
