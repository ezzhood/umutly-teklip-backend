const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')

// env variables path specified
dotenv.config({ path: './config/configs.env' })

const app = express()

// database connection
const sequelize = require('./config/database')
sequelize
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log(`Database error: ${err}`))

// cors enabled TODO: whitelist origin
app.use(cors())
// json parser
app.use(express.json())
// dev logs
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

// route mounting
app.use('/api/v1/', require('./routes'))

const PORT = process.env.PORT || 5000

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT} in ${process.env.NODE_ENV} mode`)

  await sequelize.sync({ alter: true })
  console.log('Database synced all models succesfully')
})
