/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      azure: "#678EDC",
      lavender: "#8C34E4",
      mint: "#41E8D3",
      white: "#FFFFFF",
      gray: "#374151",
      black: "#0A0A0A",
    },
  },
};
