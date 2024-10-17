import React from 'react';

const ExteriorList = ({ exteriors, setSelectedExterior}) => {
    const handleSelect = (exterior) => {
        setSelectedExterior(exterior); // Pass the selected exterior back to the parent
    };
    return (
        <div className="flex text-white">
            {exteriors.length > 0 ? (
                <ul >
                    {exteriors.map((exterior, index) => (
                        <li key={exterior.id} className="mb-2 p-2 border rounded" onClick={() => handleSelect(exterior)}>
                            {/* Customize this to display the properties of each exterior */}
                            <h3 className="text-lg">Color: {exterior.color}</h3> 
                            <img
                                src={exterior.image} // Use the URL here
                                alt={exterior.color} // Alternative text for accessibility
                                className="w-32 h-32 object-cover" // Optional: Adjust image size
                            />
                            {/* <strong>Images:</strong> {exterior.image} <br /> */}
                            <strong>Price:</strong> {exterior.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No exteriors data available. Click the button to fetch data.</p>
            )}
        </div>
    );
};

export default ExteriorList;
