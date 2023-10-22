const router = require('express').Router()
const favorCtrl = require('../controllers/FavorCtrl')

router.get('/', favorCtrl.GetFavor)
router.post('/favor/add', favorCtrl.CreateFavor)
router.put('/:favor_id', favorCtrl.UpdateFavor)
router.delete('/:favor_id', favorCtrl.DeleteFavor)

module.exports = router
