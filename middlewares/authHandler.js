const jwt = require('jsonwebtoken')
const { User } = require('../models')
const { ErrorResponse } = require('../utils')
const asyncHandler = require('./asyncHandler')

const authHandler = asyncHandler(async (req, res, next) => {
  let token

  if (!req.headers.authorization) return next(new ErrorResponse('You have no access to this route', 401))

  token = req.headers.authorization.split(' ')[1]

  const verifiedToken = jwt.verify(token, process.env.JWT_SECRET)

  const user = await User.findByPk(verifiedToken.id)

  // stopping if user is not admin
  if (!user.getDataValue('is_admin')) return next(new ErrorResponse('Unauthorized to access this route', 403))

  req.user = user

  next()
})

module.exports = authHandler
