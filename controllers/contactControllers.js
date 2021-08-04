const { Contact } = require('../models')
const { asyncHandler } = require('../middlewares')

/**
 *   @desc    this route posts contact us details
 *   @route   POST /api/v1/contacts
 *   @access  public
 */
exports.postContact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.create(req.body)

  res.status(201).json(contact)
})
