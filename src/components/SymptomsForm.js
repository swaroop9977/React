import React, { useState } from 'react';

function SymptomsForm({ onSubmit }) {
    const [symptom, setSymptom] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(symptom);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={symptom} 
                onChange={(e) => setSymptom(e.target.value)} 
                placeholder="Enter your symptom" 
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default SymptomsForm;
