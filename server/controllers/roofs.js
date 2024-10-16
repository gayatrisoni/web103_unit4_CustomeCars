import pool from '../config/database.js'

//get all the roofs
const getAllRoofs = async(req, res) => {
    try {
        const results = await pool.query('SELECT * FROM roofs') 
        res.status(200).json(results.rows) 

    } catch (error) {
        console.error('⚠️ Error fetching roofs:', error);
        res.status(500).json({ error: 'An error occurred while fetching roofs.' });
    }
}

export default {
    getAllRoofs
}