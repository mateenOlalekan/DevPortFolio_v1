/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#8873ef",
        headingColor: "#081e21", // Added the missing "#" for valid color
        smallTextColor: "#193256",
      },
      animation: {
        roll: "roll 2.5s linear infinite",
        down: "down 2.5s linear infinite",
      },
      lineHeight: {
        relaxed: "1.8", // Custom relaxed line height
        loose: "2.2", // Custom loose line height
      },
      letterSpacing: {
        wider: "0.08em", // Increase word spacing further
      },
      keyframes: {
        roll: {
          "0%":   { transform: "translateX(-80%)", easing: "ease-in-out" },
          "50%":  { transform: "translateX(80%)", easing: "ease-in-out" },
          "100%": { transform: "translateX(-80%)", easing: "ease-in-out" },
        },
        
        down: {
          "0%":   { transform: "translateY(-50%)", easing: "ease-in-out" },
          "50%":  { transform: "translateY(50%)", easing: "ease-in-out" },
          "100%": { transform: "translateY(-50%)", easing: "ease-in-out" },
        },
      },
    },
  },
  plugins: [],
};
