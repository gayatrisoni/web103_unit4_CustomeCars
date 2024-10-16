import pool from '../config/database.js'

//get all the interios
const getAllInteriors = async(req, res) => {
    try {
        const results = await pool.query('SELECT * FROM interiors') 
        res.status(200).json(results.rows) 

    } catch (error) {
        console.error('⚠️ Error fetching interiors:', error);
        res.status(500).json({ error: 'An error occurred while fetching interiors.' });
    }
}

export default {
    getAllInteriors
}