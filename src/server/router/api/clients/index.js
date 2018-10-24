import express from 'express'

const router = express.Router()

import getUser from './handlers/getUser'

/*MIDDLEWARES */

import authenticated from './../../../middlewares/authenticated'


router.get('/user-id/:id', authenticated , getUser )
router.get('/user-name/:name', authenticated , getUser )


export default router