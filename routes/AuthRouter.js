const router = require('express').Router()
const controller = require('../controllers/AuthCtrl')
const middleware = require('../middleware')

router.post('/login', controller.Login)
router.post('/register', controller.Register)
router.get('/profile/:username', controller.GetProfile)
router.put(
  '/editProfile/:username',
  middleware.stripToken,
  middleware.verifyToken,
  controller.EditProfile
)
router.put(
  '/changePassword/:username',
  middleware.stripToken,
  middleware.verifyToken,
  controller.ChangePassword
)
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

module.exports = router
