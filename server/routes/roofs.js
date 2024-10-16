import express from 'express'
import roofsController from '../controllers/roofs.js'

const router =  express.Router();   

// route to get all the cars
router.get('/', roofsController.getAllRoofs);

export default router;