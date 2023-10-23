const router = require('express').Router()
const packageCtrl = require('../controllers/PackageCtrl')
const middleware = require('../middleware')

router.get('/:favorId', packageCtrl.GetPackageByFavor)
router.post(
  '/add/:favorId',
  middleware.stripToken,
  middleware.verifyToken,
  packageCtrl.CreatePackage
)

router.put(
  '/:package_id',
  middleware.stripToken,
  middleware.verifyToken,
  packageCtrl.UpdatePackage
)

router.delete(
  '/:package_id',
  middleware.stripToken,
  middleware.verifyToken,
  packageCtrl.DeletePackage
)

module.exports = router
