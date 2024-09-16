module.exports = {
  build: {
    builder: "esbuild",
    preset: {
      name: "next",
    },
    polyfills: true,
    memoryFS: {
      injectionDirs: ["data"],
      removePathPrefix: "",
    },
  },
};
