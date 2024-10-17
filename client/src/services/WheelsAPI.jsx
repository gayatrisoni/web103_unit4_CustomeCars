import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/wheels'; // Replace with your API base URL

// Get all cars
export const getAllWheels= async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching wheels:', error);
        throw error;
    }
};