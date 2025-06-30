const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [String],
  table: String,
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});
const orderModel = mongoose.model('Order', orderSchema);
module.exports = orderModel;