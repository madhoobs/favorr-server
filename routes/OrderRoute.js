const router = require('express').Router()
const orderCtrl = require('../controllers/Order')

router.get('/', orderCtrl.GetOrder)
router.post('/', orderCtrl.CreateOrder)

router.put(
  '/:order_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateOrder
)

router.delete(
  '/:order_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.Delete
)

module.exports = router
