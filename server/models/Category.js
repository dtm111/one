var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var categorySchema = new Schema({
  name: { type: String, required: true, unique: true, maxlength: 20 },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
  
});

// create a model
var Category = mongoose.model('Category', categorySchema);

module.exports = Category;