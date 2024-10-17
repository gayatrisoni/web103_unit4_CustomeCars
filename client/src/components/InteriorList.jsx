import React from 'react';

const InteriorList = ({ interiors, setSelectedInterior }) => {
    const handleSelect = (interior) => {
        setSelectedInterior(interior); // Pass the selected interior back to the parent
    };
    return (
        <div className="text-white">
            {interiors.length > 0 ? (
                <ul >
                    {interiors.map((interior, index) => (
                        <li key={interior.id} className="mb-2 p-2 border rounded " onClick={() => handleSelect(interior)} >
                            {/* Customize this to display the properties of each exterior */}
                            <strong>Color:</strong> {interior.color} <br />
                            <img
                                src={interior.image} // Use the URL here
                                alt={interior.color} // Alternative text for accessibility
                                className="w-32 h-32 object-cover" // Optional: Adjust image size
                            /><br/>
                            <strong>Price:</strong> {interior.price}  <br />
                            <strong>IsCombo:</strong> {interior.iscombo ? 'true' : 'false'}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No interiors data available. Click the button to fetch data.</p>
            )}
        </div>
    );
};

export default InteriorList;
