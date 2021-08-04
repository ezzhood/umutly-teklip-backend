const express = require('express')
const router = express.Router()

router.get('/', getContacts)

module.exports = router
