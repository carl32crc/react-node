import app from './server'
import { domain } from './shared/domain'

const { port } = domain

app.listen(port)
/* eslint-disable */
console.log(`Listening on PORT ${port}...`)