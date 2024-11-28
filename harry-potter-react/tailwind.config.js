/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        castle: "url('./assets/images/fantasy-castle.jpg')",
        marble: "url('./assets/images/marble.jpg')",
        parchment: "url('./assets/images/parchment.jpg')",
        writing: "url('./assets/images/writing.jpg')",
      },
      colors: {
        gold: "#d4af37",
        burgundy: "#740001",
        parchment: "#f7f3e9",
      },
      fontFamily: {
        harrypotter: ["HarryPotter", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 2s ease-in-out",
        sparkle: "sparkle 1.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        sparkle: {
          "0%, 100%": {
            textShadow: "0 0 5px #fff, 0 0 10px #d4af37, 0 0 20px #d4af37",
          },
          "50%": {
            textShadow: "0 0 10px #fff, 0 0 15px #d4af37, 0 0 30px #d4af37",
          },
        },
        boxShadow: {
          text: "6px 6px 12px rgba(255, 255, 255, 0.9), -6px -6px 12px rgba(255, 255, 255, 0.9)",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          textShadow:
            "6px 6px 12px rgba(255, 255, 255, 0.9), -6px -6px 12px rgba(255, 255, 255, 0.9)",
        },
      });
    },
  ],
};
