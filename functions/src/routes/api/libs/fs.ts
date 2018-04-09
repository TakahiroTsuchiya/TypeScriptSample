import * as express from 'express'
import * as fs from 'fs'

const router = express.Router()

// $domian[:$port]/api/libs/fs
router.get('/libs/fs', (req, res, next) => {

    return new Promise((resolve, reject) => {

        const filePath = 'test/resources/test.json'

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.json({
                    'sample path': 'routes/api/libs/promise.ts',
                    isError: true,
                    execption: err
                })
                reject()
            }
            res.json({
                'sample path': 'routes/api/libs/promise.ts',
                isError: false,
                readFile: JSON.parse(data)
            })
            resolve()
        })
    })
})

module.exports = router
