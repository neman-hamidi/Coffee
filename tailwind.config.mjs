/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brownMain: {
          DEFAULT: "#333333",
          light: "#B0A27B",
        },
        bodyBg: {
          DEFAULT: "#F6F5F0",
        },
        bgBtn: {
          DEFAULT: "#E2DFD5",
        },
      },
      fontFamily: {
        "rokh": "rokh",
      }
    },
  },
  plugins: [],
};
