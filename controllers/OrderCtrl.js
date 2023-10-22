const { Order } = require('../models')

const GetOrder = async (req, res) => {
  try {
    const orders = await Order.find({})
    res.send(orders)
  } catch (error) {
    throw error
  }
}

const CreateOrder = async (req, res) => {
  try {
    const order = await Order.create({ ...req.body })
    res.send(order)
  } catch (error) {
    throw error
  }
}

const UpdateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.order_id, req.body, {
      new: true,
    })
    res.send(order)
  } catch (error) {
    throw error
  }
}

const DeleteOrder = async (req, res) => {
  try {
    await Order.deleteOne({ _id: req.params.order_id })
    res.send({
      msg: 'Delete the Order',
      payload: req.params.order_id,
      status: 'Ok',
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetOrder,
  CreateOrder,
  UpdateOrder,
  DeleteOrder,
}
