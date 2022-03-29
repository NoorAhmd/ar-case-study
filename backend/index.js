// imports app from app.js
const app = require('./app')

const PORT = process.env.NODE_PORT

// connects to DB and opens the server with the given port
app.listen(PORT, () => {
    console.log('Server is running on PORT', PORT)
})
