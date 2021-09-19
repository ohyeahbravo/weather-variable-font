module.exports = {
  publicPath:
    // process.env.NODE_ENV === "production" ? "/weather-variable-font/" : "/",
    // changed it for hosting it properly on the custom domain (otherwise, it becomes weatherdiary.de/weather-variable-font)
    "/",
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      title: "Weather Diary",
    },
  },
  lintOnSave: false,
};
