const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express();
app.use(cors())
const MenuItemModel = require('./models/MenuItem');
const orderModel = require('./models/Order');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

.then(()=>(console.log("DB connected successfully")))
.catch((err)=>{console.log(err)})

//===========================================================================

app.get("/menu", async (req, res) => {
  try {
    const items = await MenuItemModel.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Error fetching menu", error: err });
  }
});

//===================================================

app.post("/order", async (req, res) => {
  try {
    const newOrder = new orderModel(req.body);
    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error placing order", error: err });
  }
});


app.listen(3001,function(){
    console.log("server is running on port 3001")
})
