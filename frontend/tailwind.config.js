/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "custom-blue-1": "#003cc1",
        "custom-blue-2": "#001e5e",
        "custom-blue-3": "#01319d",
        "custom-blue-4": "#002880",
        "custom-blue-5": "#13213d",
        "accent-blue": "#659afc",
        "blue-gray": "#1a2640",
      },
      fontFamily: {
        lora: ["Lora", "serif", "Sen"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
