const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sweetSchema = new Schema({
  
}, {
  timestamps: true
});

module.exports = mongoose.model('Sweet', sweetSchema);
