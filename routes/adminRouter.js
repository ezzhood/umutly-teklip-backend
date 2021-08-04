const express = require('express')
const router = express.Router()
const { adminControllers } = require('../controllers')

router.route('/contacts').get(adminControllers.getAllContacts)

module.exports = router
