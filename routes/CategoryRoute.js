const router = require('express').Router()
const CategoryCtrl = require('../controllers/CategoryCtrl')

router.get('/', CategoryCtrl.GetCategory)

module.exports = router
