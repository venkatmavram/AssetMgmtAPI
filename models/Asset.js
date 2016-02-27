var mongoose = require('mongoose');

// Create the Item Schma.
var AssetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  itemid: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  address: {
    type: String
  },
  description: {
    type: String
  },

});

// Export the model schema.

module.exports = AssetSchema;
