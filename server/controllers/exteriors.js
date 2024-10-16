import pool from '../config/database.js'

// Function to get all the cars
const getAllExteriors = async(req, res) => {
    try {
        const results = await pool.query('SELECT * FROM exteriors') 
        res.status(200).json(results.rows) 

    } catch (error) {
        console.error('⚠️ Error fetching exteriors:', error);
        res.status(500).json({ error: 'An error occurred while fetching exteriors.' });
    }
}

export default {
    getAllExteriors
}