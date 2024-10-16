import express from 'express'
import exteriorsController from '../controllers/exteriors.js'

const router =  express.Router();   

// route to get all the cars
router.get('/', exteriorsController.getAllExteriors);

export default router;