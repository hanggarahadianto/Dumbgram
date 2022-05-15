module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#712391",
        dark1: "#0A0606 ",
      },
    },
  },
  plugins: [require("daisyui")],
};
