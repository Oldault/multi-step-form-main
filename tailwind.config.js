/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "marine-blue": "#02295a",
      "purplish-blue": "#473dff",
      "pastel-blue": "#adbeff",
      "light-blue": "#bfe2fd",
      "strawberry-red": "#ed3548",
    },
    extend: {
      backgroundImage: {
        "menu-sidebar": "url('/assets/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
};
