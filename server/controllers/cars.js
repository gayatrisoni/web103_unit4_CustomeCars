import pool from '../config/database.js'

// Function to get all the cars
const getAllCars = async(req, res) => {
    try {
        const results = await pool.query('SELECT * FROM cars') 
        res.status(200).json(results.rows) 

    } catch (error) {
        console.error('⚠️ Error fetching cars:', error);
        res.status(500).json({ error: 'An error occurred while fetching cars.' });
    }
}

// Function to get a car by ID
const getCar = async(req, res) => {
    const id = parseInt(req.params.id)
    try {
        const results = await pool.query('SELECT * FROM cars WHERE  id= $1', [id]) 
        if (results.rows.length === 0) {
            return res.status(404).json({ error: 'Car not found.' });
        }
        res.status(200).json(results.rows[0]) 

    } catch (error) {
        console.error('⚠️ Error fetching car:', error);
        res.status(500).json({ error: 'An error occurred while fetching car.' });
    }
}

// Create a new car 
const createCar = async(req, res) => {
    const {name, isconvertible, exterior, interior, roof, wheels, price } = req.body
    try {
        const results = await pool.query(`
            INSTER INTO cars(name, exterior, interior, roof, wheels, isconvertible, price )
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *`,
            [name, exterior, interior, roof, wheels, isconvertible, price]
        )
        res.status(201).json(results.rows[0]) 
    } catch (error) {
        console.error('⚠️ Error creating car:', error);
        res.status(500).json({ error: 'An error occurred while creating car.' });
    }
} 

// update the car by id
const updateCar = async(req, res) => {
    const id = parseInt(req.params,id)
    const {name, isconvertible, exterior, interior, roof, wheels, price } = req.body
    try {
        const results = await pool.query(`
        'UPDATE cars SET name = $1, isconvertible = $2, exterior = $3, roof = $4, wheels = $5, interior = $6, price = $7 WHERE id = $8 RETURNING *',
        [name, exterior, interior, roof, wheels, isconvertible, price]`
        );
        if (results.rows.length === 0) {
            return res.status(404).json({ error: 'Car not found.' });
        }
        res.status(201).json(results.rows[0]) 

    } catch (error) {
        console.error('⚠️ Error updating car:', error);
        res.status(500).json({ error: 'An error occurred while updating existing car.' });
    }
}

// delete a car by id
const deleteCar = async(req, res) => {
    const id = parseInt(req.params,id)
    try {
        const results = await pool.query('DELETE FROM cars WHERE id=$1', [id])
        
        res.status(204).json(results.rows[0]);

    } catch (error) {
        console.error('⚠️ Error deleting car:', error);
        res.status(500).json({ error: 'An error occurred while deleting existing car.' });
    }
}

export default {
    getAllCars,
    createCar,
    getCar,
    updateCar,
    deleteCar
}