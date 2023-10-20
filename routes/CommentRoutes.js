const router = require('express').Router()
const controller = require('../controllers/CommentCtrl')
const middleware = require('../middleware')

router.get('/comments', controller.GetComment)
router.post(
  '/addComment',
  middleware.stripToken,
  middleware.verifyToken,
  controller.AddComment
)
router.put(
  '/editComment/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.EditComment
)
router.delete(
  '/deleteComment',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteComment
)

module.exports = router
