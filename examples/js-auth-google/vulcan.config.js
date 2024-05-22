export default {
  bundler: "esbuild",
  entry: "main.js",
  useNodePolyfills: true,
  preset: {
    name: "javascript",
    mode: "compute",
  },
};
