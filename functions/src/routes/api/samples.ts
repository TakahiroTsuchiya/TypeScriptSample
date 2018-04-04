import * as express from 'express'

const router = express.Router()

router.get('/sample', (req, res, next) => {
    res.json({'sample path': 'routes/api/sample.ts'})
})

module.exports = router