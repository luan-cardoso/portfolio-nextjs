/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Breakpoints Padrão do Tailwind
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',

        // BREAKPOINTS BASEADOS EM MAX-WIDTH (Para abordagem Desktop-First)
        "max-lg": { max: "1023px" },
        "max-md": { max: "767px" },
        "max-sm": { max: "639px" },
      },
    },
  },
  plugins: [],
};
