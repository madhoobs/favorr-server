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
    // Find User by username OR email
    let user =
      (await User.findOne({ username })) ||
      (await User.findOne({ email: username }))
    // Check password with database
    if (user) {
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
    }
    res.status(401).send({ status: 'Error', msg: 'Wrong credentials!' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'An error has occurred!' })
  }
}

const ChangePassword = async (req, res) => {
  try {
    // Extract old and new passwords from body
    const { oldPassword, newPassword } = req.body
    // Find User by username (params)
    let user = await User.findOne({ username: req.params.username })
    // Compate entered existing password with actual password in DB
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      oldPassword
    )
    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      user = await User.findOneAndUpdate(
        { username: req.params.username },
        { passwordDigest }
      )
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

const GetProfile = async (req, res) => {
  try {
    // Find username from params
    let user = await User.findOne({ username: req.params.username })
    // Send user if found, otherwise send user not found
    return user ? res.send(user) : res.status(400).send('User not found!')
  } catch (error) {
    throw error
  }
}

const EditProfile = async (req, res) => {
  try {
    // Extract inputs from body
    const { username, email, firstname, lastname } = req.body
    let user = await User.findOne({ username: req.params.username })
    // Set profile picture if added
    if (req.file && req.file.filename) {
      const profilePicture = req.file.filename
      // Change profilePicture
    }
    // Check if email or username already exists
    if (email != user.email) {
      let existingEmail = await User.findOne({ email })
      if (existingEmail) {
        return res
          .status(400)
          .send('A user with that email has already been registered!')
      }
    }
    if (username != user.username) {
      let existingUsername = await User.findOne({ username })
      if (existingUsername) {
        return res.status(400).send('Username is already taken!')
      }
    }
    if (
      username === '' ||
      email === '' ||
      firstname === '' ||
      lastname === ''
    ) {
      // If one of the fields are empty
      return res.status(400).send('Please fill all required fields!')
    } else {
      // Update user
      let user
      user = await User.findOneAndUpdate(
        { username: req.params.username },
        {
          username,
          email,
          firstname,
          lastname
        }
      )
      res.send(user) // This sends the old user profile!
    }
  } catch (error) {
    throw error
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
  GetProfile,
  EditProfile,
  CheckSession
}
