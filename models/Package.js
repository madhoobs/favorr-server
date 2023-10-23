const { Schema } = require("mongoose")

const packageSchema = new Schema(
  {
    tier: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    order: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    },
    favor: {
      type: Schema.Types.ObjectId,
      ref: 'Favor',
    },
  },
  { timestamps: true }
)

module.exports = packageSchema
