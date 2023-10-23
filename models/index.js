const mongoose = require('mongoose')
const userSchema = require('./User')
const categorySchema = require('./Category')
const favorSchema = require('./Favor')
const packageSchema = require('./Package')
const commentSchema = require('./Comment')
const orderSchema = require('./Order')

const User = mongoose.model('User', userSchema)
const Category = mongoose.model('Category', categorySchema)
const Favor = mongoose.model('Favor', favorSchema)
const Package = mongoose.model('Package', packageSchema)
const Comment = mongoose.model('Comment', commentSchema)
const Order = mongoose.model('Order', orderSchema)

module.exports = {
  User,
  Category,
  Favor,
  Package,
  Comment,
  Order,
}
