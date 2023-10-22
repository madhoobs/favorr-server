const { Schema } = require('mongoose')

const favorSchema = new Schema(
  {
    image: String,
    description: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
)

module.exports = favorSchema
