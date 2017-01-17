var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var productSchema = new Schema({
  
  name: { type: String, required: true, unique: true, maxlength: 20 },
  purchasePrice:{ type: Number, required: true},
  sellingPrice:{ type: Number, required: true},
  category: { type: String, ref: 'Category', default: 'noCategory'}
  
});

// create a model
var Product = mongoose.model('Product', productSchema);

module.exports = Product;