// Load express module
const express = require("express")
const cors = require("cors")
// Import the routes

// Port configurations
const PORT = process.env.PORT
// Receive the mongoDB connection 
const db = require("./db")
// Invoke express functionality
const app = express()
// middleware 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// Mount the routes

// Listen to requests on port
app.listen(PORT, () => {
  console.log(`Favorr running on Port ${PORT}`)
})
