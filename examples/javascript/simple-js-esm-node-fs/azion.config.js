module.exports = {
  build: {
  entry: 'index.js',
  builder: 'esbuild',
  polyfills: true,
  memoryFS: {
    injectionDirs: ['files/'],
    removePathPrefix: 'files/',
  },
}
}