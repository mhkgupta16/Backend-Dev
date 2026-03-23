const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId, // BSON ObjectId
    required: true
  },
  orderDate: {
    type: Date, // BSON Date
    required: true
  },
  totalAmount: {
    type: Number, // BSON Number
    required: true
  },
  items: {
    type: [String] // Array
  }
});

module.exports = mongoose.model("Order", orderSchema);