const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  images: [String],
  category: String,
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  inStock: { type: Boolean, default: true },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number],
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);