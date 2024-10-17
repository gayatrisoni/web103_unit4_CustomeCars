import React, {useState, useEffect} from 'react'
import '../App.css'
import '../css/Navigation.css'
import { getAllExteriors } from '../services/ExteriorsAPI';
import { getAllInteriors } from '../services/InteriorsAPI';
import { getAllWheels } from '../services/WheelsAPI';
import { getAllRoofs } from '../services/RoofsAPI';
import ExteriorList from './ExteriorList'; //
import InteriorList from './InteriorList'; //
import WheelList from './WheelList'; //
import RoofList from './RoofList'; //
import { createCar } from '../services/CarsAPI';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    const navigate = useNavigate();
    const basePrice = 65000; 
    const [exteriors, setExteriors] = useState([{id: 0, color: "", image: "", price: ""}]);
    const [interiors, setInteriors] = useState([{id: 0, color: "", image: "", price: "", iscombo: null}]);
    const [wheels, setWheels] = useState([{id: 0, color: "", image: "", price: ""}]);
    const [roofs, setRoofs] = useState([{id: 0, color: "", image: "", price: "", iscovertible:""}]);
    const [isFetched, setIsFetched] = useState(false); 
    const [currentList, setCurrentList] = useState(null);

    const [selectedExterior, setSelectedExterior] = useState(null);
    const [selectedInterior, setSelectedInterior] = useState(null);
    const [selectedWheels, setSelectedWheels] = useState(null);
    const [selectedRoof, setSelectedRoof] = useState(null);
    const [isConvertible, setIsConvertible] = useState(false);
    const [carName, setCarName] = useState('');
    const [totalPrice, setTotalPrice] = useState(basePrice);
    

    const calculateTotalPrice = () => {

        // Ensure that text prices are converted to integers, defaulting to 0 if invalid
            const exteriorPrice = parseInt(selectedExterior?.price) || 0;
            const interiorPrice = parseInt(selectedInterior?.price) || 0;
            const wheelPrice = parseInt(selectedWheels?.price) || 0;
            const roofPrice = parseInt(selectedRoof?.price) || 0;
        
            return basePrice + exteriorPrice + interiorPrice + wheelPrice + roofPrice;
        
    };

    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
    }, [selectedExterior, selectedInterior, selectedWheels, selectedRoof]);


    const handleExteriorClick = async () => {
        try {
            const exteriorData = await getAllExteriors();
            setExteriors(exteriorData); 
            setIsFetched(true); 
            setCurrentList('exteriors');
            console.log(exteriorData); // Handle the fetched data here (e.g., store it in state)
        } catch (error) {
            console.error('Error fetching exterior data:', error);
        }
    };

    const handleInteriorClick = async () => {
        try {
            const interiorData = await getAllInteriors();
            setInteriors(interiorData); 
            setIsFetched(true); 
            setCurrentList('interiors');
            console.log(interiorData); // Handle the fetched data here (e.g., store it in state)
        } catch (error) {
            console.error('Error fetching exterior data:', error);
        }
    };

    const handleWheelClick = async () => {
        try {
            const wheelData = await getAllWheels();
            setWheels(wheelData); 
            setIsFetched(true); 
            setCurrentList('wheels');
            console.log(wheelData); // Handle the fetched data here (e.g., store it in state)
        } catch (error) {
            console.error('Error fetching wheel data:', error);
        }
    };

    const handleRoofClick = async () => {
        try {
            const roofData = await getAllRoofs();
            setRoofs(roofData); 
            setIsFetched(true); 
            setCurrentList('roofs'); 
            console.log(roofData); // Handle the fetched data here (e.g., store it in state)
        } catch (error) {
            console.error('Error fetching roof data:', error);
        }
    };

    const handleCreateCar = async () => {
        setIsFetched(false);
        if (!selectedExterior || !selectedInterior || !selectedWheels || !selectedRoof) {
            alert("Please select all options before creating a car.");
            return;
        }

        const carData = {
            name: carName, // The name entered by the user
            exterior: String(selectedExterior?.id || null),
            interior: String(selectedInterior?.id || null),
            wheels: String(selectedWheels?.id || null),
            roof: String(selectedRoof?.id || null),
            price: String(totalPrice), // The final calculated total price
            isconvertible : isConvertible
        };

        console.log(carData)

       
        try {
            const response = await axios.post('http://localhost:3000/cars', carData);
            console.log('Car created successfully:', response.data);
            navigate('/customcars');
            // Handle successful creation (e.g., reset form or redirect)
        } catch (error) {
            console.error('Error creating the car:', error);
            // Optionally handle the error more gracefully in your UI
        }
        
    };
    
    return (
        <div>

       
        <nav >
            <div className='flex justify-between'>
                <ul>
                    <li><h1 className='text-white'>Bolt Bucket 🏎️</h1></li>
                </ul>
                <div className='flex justify-between items-center'>
                    <a href='/' role='button' className='text-white bg-red-800 p-2 rounded-md'>Customize</a>
                    <a href='/customcars' role='button' className='text-white bg-red-800 p-2 rounded-md'>View Cars</a>
                </div>

            </div>
            <div className='flex justify-between'>
                <div >
                    <div className='flex items-center gap-2'>
                        <input type='checkbox' onChange={(e) => setIsConvertible(e.target.checked)}/>
                        <label className='text-white text-2xl '>Convertible</label>
                    </div>
                    <div >
                        <button  onClick={handleExteriorClick} className='bg-red-800 text-white p-2 rounded-md'>EXTERIOR</button>
                        <button  onClick={handleInteriorClick} className='bg-red-800 text-white p-2 rounded-md'>INTERIOR</button>
                        <button  onClick={handleWheelClick} className='bg-red-800 text-white p-2 rounded-md'>WHEELS</button> 
                        <button  onClick={handleRoofClick} className='bg-red-800 text-white p-2 rounded-md'>ROOF</button>
                    </div>
                </div>
                <div>
                    <input type="text" placeholder='My New Car' className='p-2 rounded-md' onChange={(e) => setCarName(e.target.value)} />
                    <button className='bg-red-800 text-white p-2 rounded-md'  onClick={handleCreateCar}>CREATE</button>
                </div>
            </div>
        </nav>
        <div>
            {isFetched && currentList === 'exteriors' && <ExteriorList exteriors={exteriors} setSelectedExterior={setSelectedExterior} />}
            {isFetched && currentList === 'interiors' && <InteriorList interiors={interiors} setSelectedInterior={setSelectedInterior} />}
            {isFetched && currentList === 'wheels' && <WheelList wheels={wheels} setSelectedWheels={setSelectedWheels} />}
            {isFetched && currentList === 'roofs' && <RoofList roofs={roofs} setSelectedRoof={setSelectedRoof} />}
            <div className='flex text-white bg-red-800  p-2 w-24 rounded-md'>Price: ${totalPrice}</div>
        </div>
        
        </div>
    )
}

export default Navigation