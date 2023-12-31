const router = require('express').Router()
const favorCtrl = require('../controllers/FavorCtrl')
const middleware = require('../middleware')

router.get('/find/:id', favorCtrl.GetFavor)
router.get('/user/:userId', favorCtrl.GetFavorByUser)
router.get('/:category', favorCtrl.GetFavorByCategory)
router.post(
  '/add',
  middleware.stripToken,
  middleware.verifyToken,
  favorCtrl.CreateFavor
)
router.put(
  '/:favor_id',
  middleware.stripToken,
  middleware.verifyToken,
  favorCtrl.UpdateFavor
)
router.delete(
  '/:favor_id',
  middleware.stripToken,
  middleware.verifyToken,
  favorCtrl.DeleteFavor
)

module.exports = router
