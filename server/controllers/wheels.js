import pool from '../config/database.js'

//get all the wheels
const getAllWheels = async(req, res) => {
    try {
        const results = await pool.query('SELECT * FROM wheels') 
        res.status(200).json(results.rows) 

    } catch (error) {
        console.error('⚠️ Error fetching wheels:', error);
        res.status(500).json({ error: 'An error occurred while fetching wheels.' });
    }
}

export default {
    getAllWheels
}