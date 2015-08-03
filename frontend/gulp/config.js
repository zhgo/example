module.exports = {
  browserify: {
    // Enable source maps
    debug: false,
    src: "./src",
    dest: "../public/app",
    entries: [
      'collab/index_index.jsx',
<<<<<<< HEAD
      'collab/index_signin.jsx',
      'shared/bootstrap.jsx'
=======
      'collab/issue_add.jsx',
      'collab/issue_browse.jsx',
      'collab/issue_detail.jsx',
      'bootstrap.jsx'
>>>>>>> dfb45c76df9fecf8a7bc200a03fb6f75253ac382
    ]
  }
};