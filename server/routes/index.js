const path = require("path"),
  fs = require("fs"),
  location = path.resolve("./modules"),
  config = require('../config')

/**
 * Registers routes for express router
 */
exports.registerRoutes = app => {
  //@ require all controllers here
  fs.readdirSync(location)
    .filter(dir => {
      return fs.statSync(`${location}/${dir}`).isDirectory();
    })
    .forEach(dir => {
      let fileObj = require(path.resolve(`./modules/${dir}/routes/${dir}.routes`));
      app.use(config.api.prefix + fileObj.base, fileObj.router);
    });
};