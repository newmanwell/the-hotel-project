const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('Welcome to the jungle!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`)
})