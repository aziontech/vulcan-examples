module.exports = {
  build: {
    polyfills: false,
    worker: false,
    preset: {
      name: 'rustwasm',
      mode: 'compute',
    },
  },
};
