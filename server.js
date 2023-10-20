// Load express module
const express = require('express')
const cors = require('cors')
require('dotenv').config()

// Port configurations
const PORT = process.env.PORT

// Receive MongoDB connection
const db = require('./db')

// Invoke express functionality
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Import routes
const AuthRouter = require('./routes/AuthRouter')
const CategoryRouter = require('./routes/CategoryRouter')
const FavorRouter = require('./routes/FavorRouter')
const PackageRouter = require('./routes/PackageRouter')
const CommentRouter = require('./routes/CommentRouter')

// Mount routes
app.use('/', AuthRouter)
app.use('/category', CategoryRouter)
app.use('/favor', FavorRouter)
app.use('/package', PackageRouter)
app.use('/', CommentRouter)

// Listen to requests on port
app.listen(PORT, () => {
  console.log(`Favorr server is running on port ${PORT}`)
})
