const mongoose = require("mongoose")
const categorySchema = require("./Category")
const favorSchema = require("./Favor")
const packageSchema = require("./Package")

const Category = mongoose.model("Category", categorySchema)
const Favor = mongoose.model("Favor", favorSchema)
const Package = mongoose.model("Package", packageSchema)

module.exports = {
  Category,
  Favor,
  Package,
}
