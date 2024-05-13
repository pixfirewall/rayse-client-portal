const express = require('express')
const path = require('path')
const app = express()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist/apps/web')))

// A catch-all route handler for any requests that don't match
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/apps/web', 'index.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
