module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  }, daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#222831",
          secondary: "#393E46",
          accent: "#00ADB5",
          neutral: "#EEEEEE",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}