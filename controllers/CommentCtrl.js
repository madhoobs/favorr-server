const { Comment } = require('../models')

const AddComment = async (req, res) => {
  try {
    let comment = { ...req.body }
    // Get UserID from payload and add it to the new comment
    const { payload } = res.locals
    comment.user = payload.id
    // Add FavorID in the new comment
    comment.favor = req.body.favorID
    let newComment = await Comment.create(comment)
    res.send(newComment)
  } catch (error) {
    throw error
  }
}

const GetCommentByUser = async (req, res) => {
  try {
    let comments = await Comment.find({ user: req.body.userID })
    // Server crashes when id is invalid!
    return comments
      ? res.send(comments)
      : res.status(400).send('Comments not found!')
  } catch (error) {
    throw error
  }
}

const GetCommentByFavor = async (req, res) => {
  try {
    console.log('Here')
    let comments = await Comment.find({ favor: req.params.favorID })
    // Server crashes when id is invalid!
    return comments
      ? res.send(comments)
      : res.status(400).send('Comments not found!')
  } catch (error) {
    throw error
  }
}

const EditComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.commentID,
      req.body,
      {
        new: true
      }
    )
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    // Shouldn't we check first that the comment belongs to the authorized user ?!
    await Comment.findByIdAndDelete(req.params.commentID)
    res.send({
      msg: 'Comment Deleted',
      payload: req.params.commentID,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCommentByUser,
  GetCommentByFavor,
  AddComment,
  EditComment,
  DeleteComment
}
