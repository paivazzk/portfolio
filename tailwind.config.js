export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["text-shadow-neon"],
  theme: {
    extend: {
      textShadow: {
        neon: `
          0 0 5px #fff,
          0 0 10px #ff4d4d,
          0 0 20px #ff1a1a,
          0 0 40px #ff0000
        `,
      },
      float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
    },
    animation: {
        float: 'float 3s ease-in-out infinite',
      },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    },
  ],
};