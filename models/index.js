const mongoose = require('mongoose')
const userSchema = require('./User')
const categorySchema = require('./Category')
const favorSchema = require('./Favor')

const User = mongoose.model('User', userSchema)
const Category = mongoose.model('Category', categorySchema)
const Favor = mongoose.model('Favor', favorSchema)

module.exports = {
  User,
  Category,
  Favor
}
