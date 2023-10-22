const router = require('express').Router()
const CategoryCtrl = require('../controllers/CategoryCtrl')

router.get('/', CategoryCtrl.GetCategory)
router.get('/category/add', CategoryCtrl.CreateCategoryGet)
router.post('/category/add', CategoryCtrl.CreateCategory)
router.get('/category/:id/edit', CategoryCtrl.UpdateCategoryGet)
router.put('/:category_id', CategoryCtrl.UpdateCategory)
router.delete('/:category_id', CategoryCtrl.DeleteCategory)

module.exports = router
