import * as express from 'express'
import * as moment from 'moment'

const router = express.Router()

const CronJob = require("cron").CronJob
// 毎日6時から21時まで00分に処理を行う
const cronTime = '0 6-21 * * *'

// $domian[:$port]/api/cron
router.get('/cron', (req, res, next) => {

    new CronJob({
        cronTime: cronTime
        , onTick: () => {
            const date = moment()
            console.log('now cron execute time, ' + date.format('YYYY/MM/DD HH:mm:ss'))
        },
        start: true
    })

    res.json({
        'moment path': 'routes/api/libs/crons.ts'
        , 'message': 'now cron start'
    })
})

module.exports = router