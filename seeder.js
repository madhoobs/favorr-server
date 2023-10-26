const mongoose = require('mongoose')
const falso = require('@ngneat/falso')
const { User, Favor } = require('./models')
const middleware = require('./middleware')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB . . .')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const populateDatabase = async () => {
  let users = [...Array(4)].map((user, idx) => ({
    firstname: falso.randFirstName().toString(),
    lastname: falso.randLastName().toString(),
    username: falso.randUserName().toString(),
    email: falso.randEmail().toString(),
    passwordDigest: falso.randPassword().toString(),
    profilePicture: falso.randAvatar().toString()
  }))

  users.forEach(async (user) => {
    user.passwordDigest = await middleware.hashPassword(user.passwordDigest)
  })

  // await User.deleteMany({})
  console.log('Creating users . . .')
  await User.insertMany(users)
  console.log('Users created!')

  let registeredUsers = await User.find({})

  let favors = []

  registeredUsers.forEach((user) => {
    favors.push(
      [...Array(1)].map(() => ({
        image: falso.randImg().toString(),
        description: falso.randProductDescription().toString(),
        user: user._id,
        category: 'UX Design'
      }))
    )
  })

  console.log(favors)
  console.log('Creating favors . . .')
  await Favor.insertMany(favors) // not working, inserts empty favors
  console.log('Favors created!')

  mongoose.connection.close()
}

populateDatabase()
