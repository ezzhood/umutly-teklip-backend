const express = require('express')
const router = express.Router()

// router.use('/auth', require('./authRouter'));
// router.use('/admin', require('./adminRouter'))
router.use('/contacts', require('./contactRouter'))

module.exports = router
