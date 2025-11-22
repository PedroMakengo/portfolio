module.exports = {
  theme: {
    extend: {
      keyframes: {
        bounceY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        bounceY: "bounceY 1.2s ease-in-out infinite",
      },
    },
  },
};
