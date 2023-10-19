const { Favor } = require('../models')

const GetFavor = async (req, res) => {
  try {
    const favors = await Favor.find({})
    res.send(favors)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetFavor
}
