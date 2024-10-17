import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/cars'; // Replace with your API base URL

// Get all cars
export const getAllCars = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cars:', error);
        throw error;
    }
};

// Get a single car by ID
export const getCar = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching car with ID ${id}:`, error);
        throw error;
    }
};

// Create a new car
export const createCar = async (carData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}`, carData);
        return response.data;
    } catch (error) {
        console.error('Error creating car:', error);
        throw error;
    }
};

// Update a car by ID
export const updateCar = async (id, carData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${id}`, carData);
        return response.data;
    } catch (error) {
        console.error(`Error updating car with ID ${id}:`, error);
        throw error;
    }
};

// Delete a car by ID
export const deleteCar = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting car with ID ${id}:`, error);
        throw error;
    }
};
