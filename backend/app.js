const express = require('express')

const app = express()

// imports '.ev' reading package
require('dotenv').config()

// imports 'customeError' file
const customError = require('./utils/customError')

// Middleware
app.use(express.json())

// imports record router
const dataRouter = require('./routes/data')

// adds endpoint to record router
app.use('/api', dataRouter)

// wrong URL error handler middleware
app.use((req, _res, next) => {
    const err = new customError.PathNotFoundError(`Requested URL '${req.path}' not found!`)
    next(err)
})

// general error handler middleware
app.use((error, _req, res, _next) => {
    res.status(error.statusCode || 500).json({
        success: false,
        msg: error.message,
    })
})

module.exports = app
