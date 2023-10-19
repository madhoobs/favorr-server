const mongoose = require('mongoose')
const categorySchema = require('./Category')
const favorSchema = require('./Favor')

const Category = mongoose.model('Category', categorySchema)
const Favor = mongoose.model('Favor', favorSchema)

module.exports = {
  Category,
  Favor
}
