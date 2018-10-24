import express from 'express'
const app = express()

import polices from './polices'
import clients from './clients'

app.use(polices)
app.use(clients)

export default app