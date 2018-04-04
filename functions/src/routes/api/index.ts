import * as express from 'express'

const router = express.Router()

router.use('/', require('./samples'))

module.exports = router