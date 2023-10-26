const mongoose = require('mongoose')
const falso = require('@ngneat/falso')
const { User, Favor, Category } = require('./models')
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

  // await User.deleteMany({}) // Here we can delete all existing users
  console.log('Creating users . . .')
  await User.insertMany(users)
  console.log('Users created!')

  let registeredUsers = await User.find({})
  let categories = await Category.find({})

  let favors = []

  categories.forEach((category) => {
    favors.push(
      ...[...Array(Math.ceil(Math.random() * 3))].map(() => ({
        image: falso.randImg().toString() + '?' + Math.random(),
        description: falso.randProductDescription().toString(),
        user: registeredUsers[
          Math.floor(Math.random() * registeredUsers.length)
        ]._id, // populate favor to a random user everytime
        category: category._id
      }))
    )
  })

  // await Favor.deleteMany({}) // Here we can delete all existing favors
  console.log('Creating favors . . .')
  await Favor.insertMany(favors)
  console.log('Favors created!')

  mongoose.connection.close()
}

populateDatabase()
