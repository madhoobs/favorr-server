const { Comment } = require('../models')
const { User } = require('../models')
const { Favor } = require('../models')

const AddComment = async (req, res) => {
  try {
    const { payload } = res.locals
    let comment = { ...req.body }
    comment.user = payload.id
    let newComment = await Comment.create(comment)
    // Add the new comment to the user's comments list
    await User.findById(comment.user).then((user) => {
      user.comments.push(newComment._id)
      user.save().catch((err) => {
        console.log('Adding comment to user failed. ' + err)
      })
    })
    // Add the new comment to the respective favor (not tested yet!)
    // await Favor.findById(req.body.favor).then((favor) => {
    //   favor.comments.push(newComment._id)
    //   favor.save().catch((err) => {
    //     console.log('Adding comment to favor failed. ' + err)
    //   })
    // })
    res.send(newComment)
  } catch (error) {
    throw error
  }
}

const GetComment = async (req, res) => {
  try {
    // We are finding comments by UserID,
    // might be better to find them by FavorID ?
    let comments = await Comment.find({ user: req.body.user })
    // Server crashes when id is invalid
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
      req.params.comment_id,
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
    let comment = await Comment.findByIdAndDelete(req.body.comment_id)
    // Delete the comment from user's comments list
    await User.findById(comment.user).then((user) => {
      const index = user.comments.indexOf(comment._id)
      if (index !== -1) {
        user.comments.splice(index, 1)
      }
      user.save().catch((err) => {
        console.log('Removing comment from user failed. ' + err)
      })
    })
    // Delete the comment from favor's comments list (not tested yet!)
    // await Favor.findById(comment.favor).then((favor) => {
    //   favor.comments.pop(comment._id)
    //   favor.save().catch((err) => {
    //     console.log('Removing comment from favor failed. ' + err)
    //   })
    // })
    res.send({
      msg: 'Comment Deleted',
      payload: req.body.comment_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetComment,
  AddComment,
  EditComment,
  DeleteComment
}
