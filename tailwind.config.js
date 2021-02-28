module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  // theme: {
  //   backgroundColor: theme => ({
  //     ...theme("colors"),
  //     primary: "#020226",
  //     green: "#20C4B4",
  //     amarillo: "#ffd239",
  //     morado: "#5609e8",
  //     morado2: "#23036a",
  //     morado3: "#1c005c",
  //     chinto: "#dff31b"
  //   }),
  //   fontFamily: {
  //     mono: ["ui-monospace", "SFMono-Regular"]
  //   },
  //   extend: {}
  // },
  variants: {
    extend: {}
  },
  plugins: []
};
