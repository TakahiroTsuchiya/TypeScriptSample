import * as express from 'express'
import * as moment from 'moment'

const router = express.Router()

// $domian[:$port]/api/libs/moment
router.get('/libs/moment', (req, res, next) => {

    const date = moment()

    res.json({
        'moment path': 'routes/api/libs/moments.ts'
        , 'now date': date.format('YYYY/MM/DD HH:mm:ss')
    })
})

module.exports = router