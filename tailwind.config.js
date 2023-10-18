/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        pulse: "pulse 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite"
      },
      container: {
        center: true,
        padding: "2rem"
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
};
