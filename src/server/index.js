import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// express.static STATIC route was only working for some requests, but not others.
app.use('/', express.static('dist'))

/* ROUTES */
import api from './router/api'

app.use('/api', api)

export default app
