const express = require('express')
const router = express.Router()
const { adminControllers } = require('../controllers')
const { authHandler } = require('../middlewares')

router.route('/contacts').get(authHandler, adminControllers.getAllContacts)

module.exports = router
