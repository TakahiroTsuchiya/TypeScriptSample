import * as express from 'express'
import * as rp from "request-promise"

const router = express.Router()

// $domian[:$port]/api/libs/requestPromise
router.get('/libs/requestPromise', (req, res, next) => {

    const endPoint = 'https://randomuser.me/api/'

    const options = {
        url: endPoint,
        json: true,
    }

    return rp(options)
        .then((data) => {
            console.log("success")
            res.json({ "message": "success", "data": data})
        }).catch((err) => {
            console.log("fail")
            switch(err.statusCode) {
                case 404:
                    break
                case 500:
                    break
                default:
                    break
            }
            res.json({ "message": "fail", "execption": err.message })
        }).finally((() => {
            console.log("finally")
        })
    );
})

module.exports = router