const { Order } = require('../models')
const { User } = require('../models')

const GetOrderByUser = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userID })
    res.send(orders)
  } catch (error) {
    throw error
  }
}

const GetOrder = async (req, res) => {
  try {
    const orders = await Order.findById(req.params.orderId)
    res.send(orders)
  } catch (error) {
    throw error
  }
}

const CreateOrder = async (req, res) => {
  try {
    let order = { ...req.body }
    // Get UserID from payload and add it to the new order
    const { payload } = res.locals
    order.user = payload.id
    // Get packageID from params and add it to the new order
    order.package = req.params.packageID
    let newOrder = await Order.create(order)
    res.send(newOrder)
  } catch (error) {
    throw error
  }
}

const UpdateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.order_id, req.body, {
      new: true
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
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetOrderByUser,
  CreateOrder,
  UpdateOrder,
  DeleteOrder,
  GetOrder,
}
