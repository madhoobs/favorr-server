const { Favor } = require('../models')

const GetFavor = async (req, res) => {
  try {
    const favors = await Favor.find({})
    res.send(favors)
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

module.exports = {
  GetFavor,
  CreateFavor
}
