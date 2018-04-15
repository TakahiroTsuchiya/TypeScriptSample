import * as express from 'express'

const router = express.Router()

// Libs sample code
router.use('/', require('./libs/moments'))
router.use('/', require('./libs/samples'))
router.use('/', require('./libs/crons'))
router.use('/', require('./libs/request_promise'))
router.use('/', require('./libs/promise'))
router.use('/', require('./libs/fs'))

// create my apis
router.use('/', require('./monitoring/Outline'))

module.exports = router