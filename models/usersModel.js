const { Model, DataTypes, Op } = require('sequelize')
const bcrypt = require('bcryptjs')
const { ErrorResponse } = require('../utils')
const sequelize = require('../config/database')

class User extends Model {
  async isEqualToHashed(plainPwd) {
    const state = await bcrypt.compare(plainPwd, this.getDataValue('password'))
    return state
  }
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 3
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 8
      }
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    sequelize,
    tableName: 'users'
  }
)

const hashPassword = async password => {
  const hashedPdw = await bcrypt.hash(password, 8)
  return hashedPdw
}

const isPwdValid = password => {
  if (password.length < 8) {
    return false
  }
  return true
}

User.beforeValidate(async (instance, options) => {
  if (!isPwdValid(instance.getDataValue('password'))) {
    return Promise.reject(new ErrorResponse('Password must be longer than 8 characters', 400))
  }
})

User.beforeCreate(async (instance, options) => {
  console.log('Creating user')
  const hashedPassword = await hashPassword(instance.getDataValue('password'))
  instance.set('password', hashedPassword)
})

module.exports = User
