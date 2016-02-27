var restful = require('node-restful');
module.exports = function(app, route) {

  // Setup the controller for REST.
  var rest = restful.model(
    'asset',
    app.models.asset
  ).methods(['get', 'put', 'post', 'delete']);

  //console.log ('AssetController.js');
  // Register this endpoint with the application.
  rest.register(app, route);

  // Return middleware.
  return function(req, res, next) {
    next();
  };
};
