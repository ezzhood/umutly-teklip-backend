const express = require('express')
const router = express.Router()
const { contactControllers } = require('../controllers')

router.route('/').post(contactControllers.postContact)

module.exports = router
