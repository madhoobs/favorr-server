const { Schema } = require('mongoose')

const commentSchema = new Schema(
  {
    rating: { type: Number, min: 1, max: 5 },
    comment: { type: String, required: true },
    favor: {
      type: Schema.Types.ObjectId,
      ref: 'Favor'
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)

module.exports = commentSchema
