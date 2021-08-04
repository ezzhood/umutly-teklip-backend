const express = require('express')
const dotenv = require('dotenv')

// env variables path specified
dotenv.config({ path: './config/configs.env' })

const app = express()

// database connection
const sequelize = require('./config/database')

sequelize
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log(`Database error: ${err}`))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${process.env.NODE_ENV} mode`)
})
