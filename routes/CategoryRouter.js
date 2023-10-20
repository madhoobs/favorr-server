const router = require('express').Router()
const CategoryCtrl = require('../controllers/CategoryCtrl')

router.get('/', CategoryCtrl.GetCategory)
router.post('/', CategoryCtrl.CreateCategory)
router.put('/:category_id', CategoryCtrl.UpdateCategory)
router.delete('/:category_id', CategoryCtrl.DeleteCategory)

module.exports = router
