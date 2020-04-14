var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
  title: {type: String},
  ingredients: {type: String, default: ''},
  instructions: {type: String}
},{
  timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);