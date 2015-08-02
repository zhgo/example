module.exports = {
  browserify: {
    // Enable source maps
    debug: false,
    src: "./src",
    dest: "../public/app",
    entries: [
      'collab/index_demo.jsx', 
      'collab/index_index.jsx',
      'collab/index_signin.jsx',
      'shared/bootstrap.jsx'
    ]
  }
};