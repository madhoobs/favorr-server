const { User } = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    // Extract inputs from body
    const { username, email, password, firstname, lastname } = req.body
    // Set a default picture for new users
    const profilePicture = 'default.png'
    let passwordDigest = await middleware.hashPassword(password)
    // Check if email or username already exists
    let existingEmail = await User.findOne({ email })
    let existingUsername = await User.findOne({ username })
    if (existingEmail) {
      return res
        .status(400)
        .send('A user with that email has already been registered!')
    } else if (existingUsername) {
      return res.status(400).send('Username is already taken!')
    } else {
      // Create a new user
      const user = await User.create({
        username,
        email,
        passwordDigest,
        firstname,
        lastname,
        profilePicture
      })
      res.send(user)
    }
  } catch (error) {
    throw error
  }
}

const Login = async (req, res) => {
  try {
    // Extract inputs from body
    const { username, password } = req.body
    // Find User by username (maybe add email later)
    const user = await User.findOne({ username })
    // Check password with database
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
    if (matched) {
      let payload = {
        id: user.id,
        username: user.username
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'An error has occurred!' })
  }
}

const ChangePassword = async (req, res) => {
  try {
    // Extract old and new passwords from body
    const { oldPassword, newPassword } = req.body
    // Find User by ID (params)
    let user = await User.findById(req.params.user_id)
    // Compate entered existing password with actual password in DB
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      oldPassword
    )
    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      user = await User.findByIdAndUpdate(req.params.user_id, {
        passwordDigest
      })
      let payload = {
        id: user.id,
        username: user.username
      }
      return res.send({ status: 'Password Updated!', user: payload })
    }
    res
      .status(401)
      .send({ status: 'Error', msg: 'Old password did not match!' })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred while changing password!'
    })
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Register,
  Login,
  ChangePassword,
  CheckSession
}
