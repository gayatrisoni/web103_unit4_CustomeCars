import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Card = (props) => { 
    
    const [car, setCar] = useState({id: 0, name: "", exterior: "", interior: "", price: "", roof: "", wheels: "", isconvertible: ""})

    useEffect(() => {
        setCar({id: props.id, name: props.name, exterior: props.exterior, interior: props.interior, price: props.price, roof: props.roof, wheels: props.wheels, isconvertible: props.isconvertible });
    }, [props]);

    return (
        <div  className='car-card bg-black text-white p-4  rounded shadow-lg m-28' >
            {/* <div  style={{ backgroundImage:`url(${car.image})`}}></div> */}
            <div key={car.id} className='flex flex-col' >
                <div className='flex ' >
                    <h3>{car.name}</h3>
                </div>
                {/* <div className='flex gap-8'>
                    <p>{'Exterior: ' + car.exterior}</p>
                    <p>{'Interior: ' + car.interior}</p>
                </div> */}
                <div className='flex gap-8' >
                    <p>{'Price: ' + car.price}</p>
                    {/* <p>{'Roof: ' + car.roof}</p>
                    <p>{'Wheels: ' + car.wheels}</p> */}
                </div>
                <div className='flex'>
                    <Link to={'/customcars/' + car.id}><button className='bg-red-800 p-2'>Details</button> </Link>
                </div>
            </div>
        </div>
    )
}

export default Card