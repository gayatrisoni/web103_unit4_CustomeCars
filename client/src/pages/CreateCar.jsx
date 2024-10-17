import React from 'react'
import { useEffect, useState } from 'react'
import '../App.css'
import { getAllCars } from '../services/CarsAPI';
import Card from '../components/Card'

const CreateCar = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {

        const fetchCars = async () => {
            try {
                const data = await getAllCars();
                setCars(data); // Set the cars data from the response
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchCars(); // Call the function to fetch cars
    }, []);


    return (
        <div className='flex flex-col' >
        <div className='' >
        {
            cars && cars.length > 0 ?
            cars.map((car,index) => 
                
               <Card id={car.id} 
                     name={car.name} 
                     exterior={car.exterior} 
                     interior={car.interior} 
                     roof={car.roof}
                     wheels={car.wheels}
                     price={car.price} />

            ) : <h3 >{'No Cars Yet 😞'}</h3>
        }
        </div>
    </div>  
    )
}

export default CreateCar