/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "marine-blue": "#02295a",
      "purplish-blue": "#473dff",
      "pastel-blue": "#adbeff",
      "white-blueish": "#F8F9FE",
      "light-blue": "#bfe2fd",
      "strawberry-red": "#ed3548",
      "cool-gray": "#9699ab",
      "light-gray": "#d6d9e6",
      "magnolia": "#f0f6ff",
      "alabaster": "#fafbff",
      "light-purple": "#F8F9FE",

    },
    extend: {
      backgroundImage: {
        "menu-sidebar": "url('/assets/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
};
