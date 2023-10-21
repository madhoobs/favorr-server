const { Schema } = require('mongoose')

const orderSchema = new Schema(
  {
    id: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = orderSchema
