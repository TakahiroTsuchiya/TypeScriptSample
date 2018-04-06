import * as express from 'express'

const router = express.Router()

router.use('/', require('./libs/moments'))
router.use('/', require('./libs/samples'))

module.exports = router