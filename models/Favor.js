const { Schema } = require('mongoose')

const favorSchema = new Schema({
  image: String,
  description: String,
  package: {
    type: Schema.Types.ObjectId,
    ref: 'Package'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = favorSchema
