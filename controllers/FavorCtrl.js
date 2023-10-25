const { Favor, Category } = require('../models')

const GetFavor = async (req, res) => {
  try {
    const favors = await Favor.findById(req.params.id).populate('user')
    res.send(favors)
  } catch (error) {
    throw error
  }
}

const GetFavorByUser = async (req, res) => {
  try {
    const favors = await Favor.find({ user: req.body.userId })
    res.send(favors)
  } catch (error) {
    throw error
  }
}

const GetFavorByCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ name: req.params.category })
    const favor = await Favor.find({ category: category._id }).populate('user')
    res.send(favor)
  } catch (error) {
    throw error
  }
}

const CreateFavor = async (req, res) => {
  try {
    const { payload } = res.locals
    let favor = { ...req.body }
    const category = await Category.findOne({ name: favor.category })
    favor.user = payload.id
    favor.category = category._id
    let newFavor = await Favor.create(favor)
    res.send(newFavor)
  } catch (error) {
    throw error
  }
}

const UpdateFavor = async (req, res) => {
  try {
    const favor = await Favor.findByIdAndUpdate(req.params.favor_id, req.body, {
      new: true
    })
    res.send(favor)
  } catch (error) {
    throw error
  }
}

const DeleteFavor = async (req, res) => {
  try {
    await Favor.deleteOne({ _id: req.params.favor_id })
    res.send({
      msg: 'Favor Deleted',
      payload: req.params.favor_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetFavor,
  GetFavorByUser,
  GetFavorByCategory,
  CreateFavor,
  UpdateFavor,
  DeleteFavor
}
