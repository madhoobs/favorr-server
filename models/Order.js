const { Schema } = require('mongoose')

const orderSchema = new Schema(
  {
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
