import React from 'react';

const RoofList = ({ roofs, setSelectedRoof }) => {
    const handleSelect = (roof) => {
        setSelectedRoof(roof); // Pass the selected roof back to the parent
    };

    return (
        <div className="text-white">
            
            {roofs.length > 0 ? (
                <ul >
                    {roofs.map((roof, index) => (
                        <li key={roof.id} className="mb-2 p-2 border rounded" onClick={() => handleSelect(roof)} >
                            {/* Customize this to display the properties of each exterior */}
                            <strong>Color:</strong> {roof.color} <br />
                            <img
                                src={roof.image} // Use the URL here
                                alt={roof.color} // Alternative text for accessibility
                                className="w-32 h-32 object-cover" // Optional: Adjust image size
                            /> <br />
                            <strong>Price:</strong> {roof.price}  <br />
                            <strong>IsConvertible:</strong> {roof.iscombo ? 'true' : 'false'}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No roofs data available. Click the button to fetch data.</p>
            )}
        </div>
    );
};

export default RoofList;
