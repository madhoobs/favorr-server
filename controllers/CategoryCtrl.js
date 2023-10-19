const { Category } = require('../models')

const GetCategory = async (req, res) => {
  try {
    const categories = await Category.find({})
    res.send(categories)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCategory
}
