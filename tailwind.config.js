/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#678EDC",
      purple: "#8C34E4",
      mint: "#41E8D3",
      white: "#FFFFFF",
      dark: "#1D1D1D",
      black: "#0A0A0A",
    },
    fontSize: {
      xl: "2.0rem",
      lg: "1.6rem",
      md: "1.2rem",
      sm: "1rem",
    },
    fontWeight: {
      normal: 400,
      bold: 600,
    },
    fontFamily: {
      pretendard: ["var(--font-pretendard)"],
      catamaran: ["var(--font-catamaran)"],
    },
  },
};
