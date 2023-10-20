const router = require("express").Router()
const packageCtrl = require("../controllers/PackageCtrl")

router.get("/", packageCtrl.GetPackage)
router.post("/", packageCtrl.CreatePackage)

router.put(
  "/:package_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePackage
)

router.delete(
  "/:package_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeletePackage
)

module.exports = router
