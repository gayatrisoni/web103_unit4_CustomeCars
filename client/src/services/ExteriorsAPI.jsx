import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/exteriors'; // Replace with your API base URL

// Get all cars
export const getAllExteriors = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching exteriors:', error);
        throw error;
    }
};