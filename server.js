// Load express module
const express = require('express')
const cors = require('cors')
require('dotenv').config()

// Import the routes
const AuthRouter = require('./routes/AuthRoutes')
const CommentRouter = require('./routes/CommentRoutes')

// Port configurations
const PORT = process.env.PORT
// Receive the mongoDB connection
const db = require('./db')
// Invoke express functionality
const app = express()
// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// Mount the routes
app.use('/', AuthRouter)
app.use('/', CommentRouter)

// Listen to requests on port
app.listen(PORT, () => {
  console.log(`Favorr running on Port ${PORT}`)
})
