const { Favor } = require('../models')

const GetFavor = async (req, res) => {
  try {
    const favors = await Favor.find({})
    res.send(favors)
  } catch (error) {
    throw error
  }
}

const CreateFavorGet = async (req, res) => {
  try {
    res.render('/favor/add')
  } catch (error) {
    throw error
  }
}

const CreateFavor = async (req, res) => {
  try {
    const favor = await Favor.create({ ...req.body })
    res.send(favor)
  } catch (error) {
    throw error
  }
}

const UpdateFavorGet = async (req, res) => {
  try {
    const favor = await Favor.findById(req.params.favor_id)
    res.render('/favor/edit', { favor })
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
  CreateFavorGet,
  CreateFavor,
  UpdateFavorGet,
  UpdateFavor,
  DeleteFavor
}
