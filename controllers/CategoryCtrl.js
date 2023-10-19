const { Category } = require('../models')

const GetCategory = async (req, res) => {
  try {
    const categories = await Category.find({})
    res.send(categories)
  } catch (error) {
    throw error
  }
}

const CreateCategory = async (req, res) => {
  try {
    const category = await Category.create({ ...req.body })
    res.send(category)
  } catch (error) {
    throw error
  }
}

const UpdateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.category_id,
      req.body,
      { new: true }
    )
    res.send(category)
  } catch (error) {
    throw error
  }
}

const DeleteCategory = async (req, res) => {
  try {
    await Category.deleteOne({ _id: req.params.category_id })
    res.send({
      msg: 'Category Deleted',
      payload: req.params.category_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCategory,
  CreateCategory,
  UpdateCategory,
  DeleteCategory
}
