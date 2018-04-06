import * as express from 'express'

const router = express.Router()

router.use('/', require('./samples'))
router.use('/', require('./libs/moments'))

module.exports = router