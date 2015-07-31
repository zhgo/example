module.exports = {
  browserify: {
    // Enable source maps
    debug: false,
    src: "./src",
    dest: "../public/app",
    entries: [
      'collab/index_demo.jsx', 
      'collab/index_index.jsx',
      'shared/bootstrap.jsx'
    ]
  }
};