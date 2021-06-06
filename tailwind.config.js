module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/5": "60%",
      "7/10": "70%",
      "3/4": "75%",
    },
    maxHeight: {
      "1/4": "25%",
      "1/2": "50%",
      "3/5": "60%",
      "7/10": "70%",
      "3/4": "75%",
      "4/5": "80%",
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed",
      crosshair: "crosshair",
      "zoom-in": "zoom-in",
      "zoom-out": "zoom-out",
    },
    borderWidth: {
      DEFAULT: "0.75px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        "default-blue": "#0000ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
