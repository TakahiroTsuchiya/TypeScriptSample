import * as express from 'express'
import * as rp from "request-promise"

const router = express.Router()


/************************
 * 外形監視用API.<br/>
 * 
 * $targetUrl を監視して、HTTP STATUS CODE 200 以外を返した場合、
 * $WebhookUrl に通知する
 * 
 * cron 設定については、cron-job.org などを利用して呼び出すことを想定に作成している
 */

// $domian[:$port]/api/monitoring/outline
router.get('/monitoring/outline', (req, res, next) => {

    // TODO:
    const targetUrl = 'YOUR_WATCH_URL'
    // TODO: Webhook URL
    const WebhookUrl = 'WEBHOOK_URL'
    
    const targetOptions = {
        url: targetUrl,
        timeout: 5 * 1000,
        json: true,
    }

    // TODO: CHANGE YOUR DETAIL MESSAGES.
    let responseMessages: String
    let isFail = false

    return rp(targetOptions)
        .then((data) => {
            console.log("success")
            responseMessages = "success"
            res.json({ message: responseMessages, fail: isFail, data: data })
        }).catch((err) => {
            console.log("fail")

            isFail = true

            switch (err.statusCode) {
                case 404:
                    break
                case 500:
                    break
                default:
                    break
            }

            responseMessages  = "fail : " + targetUrl
            responseMessages += ", statusCode : " + err.statusCode
            responseMessages += ", error message : " + err.message


            const WebhookOptions = {
                url: WebhookUrl,
                timeout: 5 * 1000,
                json: true,
                method: 'POST',
                body: {
                    text: "Fail url : " + targetUrl + ". detail : " + responseMessages
                },
            }

            // webhook に通知
            return rp(WebhookOptions).then((data) => {
                console.log('send webhook success.')
                responseMessages += 'send webhook success.'
            }).catch(() => {
                console.log('send webhook fail')
                responseMessages += 'send webhook fail.'
            }).finally(() => {
                console.log('send webhook end.')
                responseMessages += 'send webhook end.'
                res.json({ message: responseMessages, fail: isFail
                    , execption: {
                        url: targetUrl, statusCode: err.statusCode, 'error-message': err.message 
                    } 
                })
            })
        }).finally((() => {
            console.log("finally")
        })
    );
})

module.exports = router