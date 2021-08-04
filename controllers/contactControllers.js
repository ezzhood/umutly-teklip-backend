const { asyncHandler } = require('../middlewares')

/**
 *   @desc    this route posts contact us details
 *   @route   POST /api/v1/contacts
 *   @access  public
 */
exports.postContact = asyncHandler(async (req, res, next) => {
  res.status(201).send('posting contact')
})
