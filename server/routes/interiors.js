import express from 'express'
import interiorsController from '../controllers/interiors.js'

const router =  express.Router();   

// route to get all the cars
router.get('/', interiorsController.getAllInteriors);

export default router;