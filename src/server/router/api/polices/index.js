import express from 'express'

const router = express.Router()

import getPolicies from './handlers/getPolicies'
import getPolicy from './handlers/getPolicy'

/*MIDDLEWARES */

import isAdmin from './../../../middlewares/isAdmin'
import authenticated from './../../../middlewares/authenticated'

router.get('/policies/:name', [authenticated, isAdmin] , getPolicies )
router.get('/policy/:id', [authenticated, isAdmin] , getPolicy )

export default router