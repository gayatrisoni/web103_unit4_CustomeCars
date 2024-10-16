import express from 'express'
import carsController from '../controllers/cars.js'

const router =  express.Router();   

// route to get all the cars
router.get('/', carsController.getAllCars);
//router to create a new car
router.post('/', carsController.createCar)

//router to get signle car
router.get('/:id', carsController.getCar)
//router to update car
router.patch('/:id', carsController.updateCar)
//router to delete a car
router.delete('/:id', carsController.deleteCar)


export default router;