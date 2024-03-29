const express = require('express')
const router = express.Router()

router.use('/auth', require('./authRouter'))
router.use('/contacts', require('./contactRouter'))
router.use('/admingate', require('./adminRouter'))

module.exports = router
