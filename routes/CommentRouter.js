const router = require('express').Router()
const controller = require('../controllers/CommentCtrl')
const middleware = require('../middleware')

router.get('/', controller.GetCommentByUser)
router.get('/:favorID', controller.GetCommentByFavor)
router.post(
  '/add',
  middleware.stripToken,
  middleware.verifyToken,
  controller.AddComment
)
router.put(
  '/edit/:commentID',
  middleware.stripToken,
  middleware.verifyToken,
  controller.EditComment
)
router.delete(
  '/delete/:commentID',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteComment
)

module.exports = router
