/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./data/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#100E0C",
        surface: "#191510",
        raised: "#221D16",
        line: "#302A21",
        ivory: "#F4EFE6",
        muted: "#A89E8E",
        dim: "#786F62",
        brass: "#C9A55C",
        gilt: "#E2C384",
        sage: "#7FA08A",
        clay: "#B9764F",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { shell: "1120px", prose: "64ch" },
    },
  },
  plugins: [],
};
