// env variables path specified
const dotenv = require('dotenv')
dotenv.config({ path: './config/configs.env' })
// requiring user model
const { User } = require('./models')
// requiring data to be inserted
const { adminUser } = require('./data')

// method to create admin user
const createAdminUser = async () => {
  const user = await User.create(adminUser)
  console.log('Data successfully imported')
}

// method to destroy all users from database
const destroyUsers = async () => {
  const users = await User.findAll()

  for (let i = 0; i < users.length; i++) {
    await users[i].destroy()
  }

  console.log('Data successfully destroyed')
}

if (process.argv[2] === '-i') {
  createAdminUser()
    .then(() => process.exit(1))
    .catch(err => console.log(err))
} else if (process.argv[2] === '-d') {
  destroyUsers()
    .then(() => process.exit(1))
    .catch(err => console.log(err))
}
