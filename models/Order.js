const { Schema } = require('mongoose')

const orderSchema = new Schema(
  {
    price: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    package: {
      type: Schema.Types.ObjectId,
      ref: 'Package',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },

  { timestamps: true }
)

module.exports = orderSchema
