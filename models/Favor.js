const { Schema } = require('mongoose')

const favorSchema = new Schema(
  {
    image: String,
    description: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
  },
  { timestamps: true }
)

module.exports = favorSchema
