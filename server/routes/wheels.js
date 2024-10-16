import express from 'express'
import wheelsController from '../controllers/wheels.js'

const router =  express.Router();   

// route to get all the cars
router.get('/', wheelsController.getAllWheels);

export default router;