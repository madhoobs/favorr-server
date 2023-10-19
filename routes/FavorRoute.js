const router = require('express').Router()
const favorCtrl = require('../controllers/FavorCtrl')

router.get('/', favorCtrl.GetCategory)

module.exports = router
