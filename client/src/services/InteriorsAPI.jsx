import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/interiors'; // Replace with your API base URL

// Get all cars
export const getAllInteriors = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching interiors:', error);
        throw error;
    }
};