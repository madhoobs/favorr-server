const { Schema } = require("mongoose")

const packageSchema = new Schema(
  {
    tier: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    order: {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  },
  { timestamps: true }
)

module.exports = packageSchema
