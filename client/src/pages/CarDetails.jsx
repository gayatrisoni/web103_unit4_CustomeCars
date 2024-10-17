import { useEffect, useState } from 'react'
import React  from 'react'
import '../App.css'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getCar } from '../services/CarsAPI';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CarDetails = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    console.log(id)
    const [car, setCar] = useState({id: 0, name: "", exterior: "", interior: "", price: "", roof: "", wheels: "", isconvertible: ""})


    useEffect(() => {
        const fetchCar = async () => {
            try {
                const data = await getCar(id);
                setCar(data); // Set the cars data from the response
            } catch (error) {
                console.error('Error fetching car:', error);
            }
        };
        fetchCar(); // Call the function to fetch cars
    }, [id]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this car?');
        if (confirmDelete) {
            try {
                const response = await axios.delete(`http://localhost:3000/cars/${id}`); // Delete the car
                console.log('Delete response:', response); // Log the response for debugging
                navigate('/customcars'); // Redirect to custom cars page after deletion
            } catch (error) {
                console.error('Error deleting car:', error);
            }
    
        }
    };

    return (
        <div >
        
            {/* <div class="image-container">
                <img id="image" src={gift.image} />
            </div> */}
            <div key={car.id} className='car-card bg-black text-white p-4  rounded shadow-lg m-28'>
                <h3>{car.name}</h3>
                <p>{'Price: ' + car.price}</p>
                <p>{'Exterior: ' + car.exterior}</p>
                <p>{'Interior: ' + car.interior}</p>
                <p>{'Roof: ' + car.roof}</p>
                <p>{'Wheels: ' + car.wheels}</p>
                <Link to={'/edit/' + car.id}><button className='bg-red-800 p-2'>Edit</button> </Link>
                <button onClick={handleDelete} className='bg-red-800 p-2'>Delete</button> 
            </div>  
    </div>
    )
}

export default CarDetails