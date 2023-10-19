const { Schema } = require("mongoose")

const packageSchema = new Schema({
  tier: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
})

module.exports = packageSchema
