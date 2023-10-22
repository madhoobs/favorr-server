const router = require('express').Router()
const favorCtrl = require('../controllers/FavorCtrl')

router.get('/', favorCtrl.GetFavor)
router.get('/favor/add', favorCtrl.CreateFavorGet)
router.post('/favor/add', favorCtrl.CreateFavor)
router.get('/favor/:id/edit', favorCtrl.UpdateFavorGet)
router.put('/:favor_id', favorCtrl.UpdateFavor)
router.delete('/:favor_id', favorCtrl.DeleteFavor)

module.exports = router
