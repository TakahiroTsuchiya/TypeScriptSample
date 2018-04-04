import * as express from 'express'

const app = express()

app.get('/', (req: express.Request, res: express.Response) => {
    console.log('get access baseUrl : ' + req.baseUrl)
    res.send({'param': 'response from typescript'})
})

app.use(require('./routes'))

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port ' + server.address().port)
})
