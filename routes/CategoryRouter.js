const router = require('express').Router()
const CategoryCtrl = require('../controllers/CategoryCtrl')
const middleware = require('../middleware')

router.get('/', CategoryCtrl.GetCategory)
router.post(
  '/category/add',
  middleware.stripToken,
  middleware.verifyToken,
  CategoryCtrl.CreateCategory
)
router.put(
  '/:category_id',
  middleware.stripToken,
  middleware.verifyToken,
  CategoryCtrl.UpdateCategory
)
router.delete(
  '/:category_id',
  middleware.stripToken,
  middleware.verifyToken,
  CategoryCtrl.DeleteCategory
)

module.exports = router
