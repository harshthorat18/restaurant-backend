const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  image: String
});

const MenuItemModel = mongoose.model('MenuItem', menuItemSchema);
module.exports=MenuItemModel