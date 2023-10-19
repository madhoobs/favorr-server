const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    profilePicture: { type: String }
    // favors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Favor' }],
    // orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
  },
  { timestamps: true }
)

module.exports = userSchema
