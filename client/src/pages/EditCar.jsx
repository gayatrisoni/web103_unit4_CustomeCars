import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditCar = () => {
    const { id } = useParams(); // Get the car ID from the URL
    const navigate = useNavigate(); // For navigation after update
    const [car, setCar] = useState({
        name: "",
        exterior: "",
        interior: "",
        price: "",
        roof: "",
        wheels: "",
        isconvertible: false
    });

    // State for selected options
    const [selectedExterior, setSelectedExterior] = useState(car.exterior);
    const [selectedInterior, setSelectedInterior] = useState(car.interior);
    const [selectedRoof, setSelectedRoof] = useState(car.roof);
    const [selectedWheels, setSelectedWheels] = useState(car.wheels);

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/cars/${id}`);
                setCar(response.data); // Set the car details in state
            } catch (error) {
                console.error('Error fetching car details:', error);
            }
        };

        fetchCarDetails();
    }, [id]);

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setCar({ ...car, [name]: value }); // Update car details in state
    };

    const handleUpdate = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            await axios.put(`http://localhost:3000/cars/${id}`, car); // Update the car details
            navigate('/customcars'); // Redirect to custom cars page after update
        } catch (error) {
            console.error('Error updating car details:', error);
        }
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this car?');
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3000/cars/${id}`); // Delete the car
                navigate('/customcars'); // Redirect to custom cars page after deletion
            } catch (error) {
                console.error('Error deleting car:', error);
            }
        }
    };

    // Handlers for button clicks to update selected options
    const handleExteriorClick = (exterior) => {
        setSelectedExterior(exterior);
    };

    const handleInteriorClick = (interior) => {
        setSelectedInterior(interior);
    };

    const handleWheelClick = (wheels) => {
        setSelectedWheels(wheels);
    };

    const handleRoofClick = (roof) => {
        setSelectedRoof(roof);
    };


    return (
        <div className='flex flex-col p-4'>
            <h2 className='text-2xl font-bold text-white'>Edit Car</h2>
           
            <div className='bg-gray-800 p-4 rounded-lg shadow-lg'>
            <div >
                <button  onClick={handleExteriorClick} className='bg-red-800 text-white p-2 rounded-md'>EXTERIOR</button>
                <button  onClick={handleInteriorClick} className='bg-red-800 text-white p-2 rounded-md'>INTERIOR</button>
                <button  onClick={handleWheelClick} className='bg-red-800 text-white p-2 rounded-md'>WHEELS</button> 
                <button  onClick={handleRoofClick} className='bg-red-800 text-white p-2 rounded-md'>ROOF</button>
            </div>
            <div>
                <h3 className='text-lg font-bold text-white'>{car.name}</h3>
                <p className='text-white'>Price: ${car.price}</p>
                <p className='text-white'>Exterior: {car.exterior}</p>
                <p className='text-white'>Interior: {car.interior}</p>
                <p className='text-white'>Roof: {car.roof}</p>
                <p className='text-white'>Wheels: {car.wheels}</p>
                <p className='text-white'>Convertible: {car.isconvertible ? 'Yes' : 'No'}</p>

            </div>
            <div className='flex space-x-2 mt-4'>
                    <button onClick={handleUpdate} className='bg-red-800 text-white p-2 rounded'>Update</button>
                    <button onClick={handleDelete} className='bg-red-800 text-white p-2 rounded'>Delete</button>
            </div>
                
            </div>
        </div>
    );
};

export default EditCar;
