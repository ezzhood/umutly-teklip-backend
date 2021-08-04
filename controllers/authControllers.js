const { User } = require('../models')
const { asyncHandler } = require('../middlewares')
const { ErrorResponse } = require('../utils')
const jwt = require('jsonwebtoken')

/**
 *   @desc    this route gets all users send from db
 *   @route   GET /api/v1/auth
 *   @access  public
 */
exports.getAllContacts = asyncHandler(async (req, res, next) => {
  const contacts = await User.findAll()

  res.status(200).json(contacts)
})
/**
 *   @desc    this route register new user and inserts it to db
 *   @route   POST /api/v1/auth/register
 *   @access  public
 */
exports.register = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body)

  res.status(201).json({
    user
  })
})
/**
 *   @desc    this route logs in user and issues new token
 *   @route   POST /api/v1/auth/login
 *   @access  public
 */
exports.login = asyncHandler(async (req, res, next) => {
  const { name, password } = req.body
  const user = await User.findOne({
    where: { name }
  })

  const state = await user.isEqualToHashed(password)

  if (!state) return next(new ErrorResponse(`Invalid credentials`, 400))

  const token = jwt.sign({ id: user.getDataValue('id') }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })

  res.status(200).json({
    user,
    token
  })
})
