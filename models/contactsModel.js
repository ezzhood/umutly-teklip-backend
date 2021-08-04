const sequelize = require('../config/database')
const { Model, DataTypes, Op } = require('sequelize')

class Contact extends Model {}

Contact.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 3
      }
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 2
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      }
    },
    phone_number: {
      type: DataTypes.STRING,
      validate: {
        is: /\b6[1-5][0-9]{6}\b/
      }
    }
  },
  {
    sequelize,
    tableName: 'contacts'
  }
)

module.exports = Contact
