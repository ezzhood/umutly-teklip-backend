const errorHandler = (err, req, res, next) => {
  // if error fails from validation pipe then errors is array type
  const errors = err.message
  err.statusCode = err.statusCode || 500
  // for debugging
  console.log(err)
  // add some more specific errors to make app error-friendly
  res.status(err.statusCode).json({
    error: errors || 'Server Error'
  })
}

module.exports = errorHandler
