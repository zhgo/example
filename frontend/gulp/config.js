module.exports = {
  browserify: {
    // Enable source maps
    debug: false,
    src: "./src",
    dest: "../public/app",
    entries: [
      'collab/index_index.jsx',
      'collab/issue_add.jsx',
      'collab/issue_browse.jsx',
      'collab/issue_detail.jsx',
      'bootstrap.jsx'
    ]
  }
};