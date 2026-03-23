const express = require("express");
const app = express();
const Order = require("./model/orderSchema");
require("./db");

app.use(express.json());


// Insert Order (JSON → BSON conversion happens here)
app.post("/add-order", async (req, res) => {
  try {
    const order = new Order({
      orderId: new require("mongoose").Types.ObjectId(), // convert to ObjectId
      orderDate: new Date(req.body.orderDate),           // convert to Date
      totalAmount: Number(req.body.totalAmount),         // convert to Number
      items: req.body.items
    });

    await order.save();
    res.send("Order saved with BSON types");
  } catch (err) {
    res.send(err);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});