const router = require('express').Router()
const orderCtrl = require('../controllers/OrderCtrl')
const middleware = require('../middleware')
router.get('/', orderCtrl.GetOrder)
router.post(
  '/',
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
