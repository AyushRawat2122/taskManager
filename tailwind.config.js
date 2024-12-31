/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        heading: "2.5rem", // Custom heading size
        subheading: "1.75rem", // Custom subheading size
      },
      colors: {
        borderDark: "#212121", // Border dark
        borderLight: "#3B3B3B", // Border Light
        primaryText: "#D4D4D4", // greyish white
        secondaryText: "#4a5568", // Medium gray
        bgColor: "#13111c",
      },
      fontFamily: {
        Inter: ["Inter", "serif"],
        Monts: ["Montserrat", "serif"],
        dancingScript: ["dancingScript", "serif"], // Add your custom font
      },
      screens: {
        'bigTablets': { 'min-width': '1024px', 'max-width': '1366px' }, 
      }
    },
  },
  plugins: [],
};
