const { Contact } = require('../models')
const { asyncHandler } = require('../middlewares')

/**
 *   @desc    this route gets all contacts send from contact us form
 *   @route   GET /api/v1/contacts
 *   @access  public
 */
exports.getAllContacts = asyncHandler(async (req, res, next) => {
  const contacts = await Contact.findAll()

  res.status(200).json(contacts)
})
