var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
  title: {type: String},
  ingredients: {type: String, default: ''},
  instructions: {type: String},
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);