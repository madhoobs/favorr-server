const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    passwordDigest: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    profilePicture: { type: String },
    favors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Favor' }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
  },
  { timestamps: true }
)

module.exports = userSchema
