const router = require('express').Router()
const orderCtrl = require('../controllers/OrderCtrl')
const middleware = require('../middleware')
router.get('/:userID', orderCtrl.GetOrderByUser)
router.get('/find/:orderId', orderCtrl.GetOrder)
router.post(
  '/add/:packageID',
  middleware.stripToken,
  middleware.verifyToken,
  orderCtrl.CreateOrder
)

router.put(
  '/:order_id',
  middleware.stripToken,
  middleware.verifyToken,
  orderCtrl.UpdateOrder
)

router.delete(
  '/:order_id',
  middleware.stripToken,
  middleware.verifyToken,
  orderCtrl.DeleteOrder
)

module.exports = router
