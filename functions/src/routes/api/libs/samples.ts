import * as express from 'express'

const router = express.Router()

// $domian[:$port]/api/libs/sample
router.get('/libs/sample', (req, res, next) => {
    res.json({'sample path': 'routes/api/libs/samples.ts'})
})

module.exports = router