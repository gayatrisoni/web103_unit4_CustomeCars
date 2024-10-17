import React from 'react';

const WheelList = ({ wheels, setSelectedWheels}) => {
    const handleSelect = (wheel) => {
        setSelectedWheels(wheel); // Pass the selected wheel back to the parent
    };

    return (
        <div className="text-white">
            { wheels.length > 0 ? (
                <ul >
                    { wheels.map(( wheel, index) => (
                        <li key={wheels.id} className="mb-2 p-2 border rounded" onClick={() => handleSelect(wheel)}>
                            {/* Customize this to display the properties of each exterior */}
                            <strong>Color:</strong> {wheel.color} <br />
                            <img
                                src={wheel.image} // Use the URL here
                                alt={wheel.color} // Alternative text for accessibility
                                className="w-32 h-32 object-cover" // Optional: Adjust image size
                            /> <br />
                            <strong>Price:</strong> {wheel.price}  
                            
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No interiors data available. Click the button to fetch data.</p>
            )}
        </div>
    );
};

export default WheelList;
