import * as express from 'express'
import * as moment from 'moment'

const router = express.Router()

// $domian[:$port]/api/libs/promise/single
router.get('/libs/promise/single', (req, res, next) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const date = moment()
            console.log('now ' + date.format('YYYY/MM/DD HH:mm:ss') + ', param : ' + 'params')
            resolve('resolve : ' + 'params')
        }, 100)
    }).then(() => {
        res.json({
            'sample path': 'routes/api/libs/promise.ts'
        })
    })
})

// $domian[:$port]/api/libs/promise/all
router.get('/libs/promise/all', (req, res, next) => {


    Promise.all([task(30000, 'task1'), task(20000, 'task2'), task(1000, 'task3')])
    .then((result) => {

        setTimeout(() => {
            const date = moment()
            console.log('now ' + date.format('YYYY/MM/DD HH:mm:ss') + ', last then')
            res.json({
                'sample path': 'routes/api/libs/promise.ts',
                result: result
            })
        }, 100)
    })
})

function task(waitTime:number, name:String) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const date = moment()
            console.log('now ' + date.format('YYYY/MM/DD HH:mm:ss') + ', name : ' + name)
            resolve('resolve : ' + 'params')
        }, waitTime)
    })
}

module.exports = router
