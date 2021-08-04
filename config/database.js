const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
  process.env.DB_NAME || 'umutly',
  process.env.DB_USERNAME || 'postgres',
  process.env.DB_PASSWORD || '123456',
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'postgres',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)
