import * as express from 'express'

const router = express.Router()

router.use('/', require('./libs/moments'))
router.use('/', require('./libs/samples'))
router.use('/', require('./libs/crons'))

module.exports = router