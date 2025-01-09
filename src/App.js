import React, { useState } from 'react';
import Header from './components/Header';
import SymptomsForm from './components/SymptomsForm';
import Results from './components/Results';
import Footer from './components/Footer';
import './styles.css';

function App() {
    const [results, setResults] = useState([]);

    const handleSymptomSubmit = (symptom) => {
        const conditions = [
            { symptom: 'fever', diagnoses: [
                { name: 'Flu', details: 'A viral infection affecting the respiratory system.', precautions: 'Stay hydrated, rest, and avoid close contact.' },
                { name: 'COVID-19', details: 'Contagious respiratory illness caused by the coronavirus.', precautions: 'Wear a mask, isolate if symptomatic, practice hygiene.' },
                { name: 'Malaria', details: 'Parasitic infection spread by mosquitoes.', precautions: 'Use mosquito nets, take prescribed antimalarial drugs.' },
                { name: 'Typhoid', details: 'Bacterial infection from contaminated food/water.', precautions: 'Drink purified water, practice good hygiene.' }
            ]},
            { symptom: 'cough', diagnoses: [
                { name: 'Common Cold', details: 'Viral infection with symptoms like cough and sore throat.', precautions: 'Rest, stay warm, and drink fluids.' },
                { name: 'Bronchitis', details: 'Inflammation of the bronchial tubes, often caused by infection.', precautions: 'Avoid smoking, rest, and use a humidifier.' },
                { name: 'Asthma', details: 'Respiratory condition with shortness of breath.', precautions: 'Avoid triggers, use inhalers, maintain clean environment.' },
                { name: 'COVID-19', details: 'Contagious respiratory illness.', precautions: 'Wear a mask, isolate if symptomatic, practice hygiene.' }
            ]},
            { symptom: 'headache', diagnoses: [
                { name: 'Migraine', details: 'Severe headache often on one side of the head.', precautions: 'Avoid triggers, stay hydrated, rest in dark room.' },
                { name: 'Sinus Infection', details: 'Inflammation of the sinuses.', precautions: 'Stay hydrated, use saline spray, warm compresses.' },
                { name: 'Stress', details: 'Caused by tension and stress.', precautions: 'Practice relaxation techniques, avoid stress.' },
                { name: 'Tension Headache', details: 'Caused by muscle tension.', precautions: 'Maintain good posture, avoid stress.' }
            ]},
            { symptom: 'sore throat', diagnoses: [
                { name: 'Strep Throat', details: 'Bacterial infection causing sore throat.', precautions: 'Avoid sharing items, drink warm liquids.' },
                { name: 'Tonsillitis', details: 'Inflammation of the tonsils.', precautions: 'Gargle saltwater, avoid irritants.' },
                { name: 'Allergies', details: 'Body’s reaction to allergens.', precautions: 'Avoid allergens, use antihistamines.' },
                { name: 'Flu', details: 'Viral infection affecting respiratory system.', precautions: 'Rest, stay hydrated.' }
            ]},
            { symptom: 'nausea', diagnoses: [
                { name: 'Food Poisoning', details: 'Caused by contaminated food.', precautions: 'Avoid risky foods, practice food hygiene.' },
                { name: 'Gastritis', details: 'Inflammation of stomach lining.', precautions: 'Avoid spicy foods, drink water.' },
                { name: 'Pregnancy', details: 'Common in early pregnancy.', precautions: 'Eat small meals, rest.' },
                { name: 'Migraine', details: 'Severe headache, may cause nausea.', precautions: 'Avoid triggers, rest in dark room.' }
            ]},
            { symptom: 'fatigue', diagnoses: [
                { name: 'Anemia', details: 'Low red blood cells.', precautions: 'Eat iron-rich foods, take supplements if prescribed.' },
                { name: 'Diabetes', details: 'High blood sugar.', precautions: 'Monitor blood sugar, eat balanced diet.' },
                { name: 'Hypothyroidism', details: 'Low thyroid hormones.', precautions: 'Follow medication, maintain balanced diet.' },
                { name: 'Chronic Fatigue Syndrome', details: 'Persistent fatigue.', precautions: 'Pace activities, rest.' }
            ]},
            { symptom: 'chest pain', diagnoses: [
                { name: 'Heart Attack', details: 'Lack of blood flow to the heart.', precautions: 'Seek immediate medical help.' },
                { name: 'Angina', details: 'Chest pain from reduced blood flow.', precautions: 'Avoid stress, follow doctor’s advice.' },
                { name: 'Pneumonia', details: 'Lung infection.', precautions: 'Rest, stay hydrated.' },
                { name: 'GERD', details: 'Acid reflux.', precautions: 'Avoid trigger foods, eat smaller meals.' }
            ]},
            { symptom: 'shortness of breath', diagnoses: [
                { name: 'Asthma', details: 'Respiratory condition causing breathing difficulty.', precautions: 'Avoid triggers, use inhaler.' },
                { name: 'Pneumonia', details: 'Lung infection.', precautions: 'Rest, follow doctor’s advice.' },
                { name: 'Anxiety', details: 'Emotional condition causing rapid breathing.', precautions: 'Practice deep breathing, relaxation.' },
                { name: 'Heart Failure', details: 'Heart’s inability to pump blood effectively.', precautions: 'Follow prescribed medication, rest.' }
            ]},
            { symptom: 'rash', diagnoses: [
                { name: 'Allergic Reaction', details: 'Skin reaction to allergens.', precautions: 'Avoid allergens, use antihistamines.' },
                { name: 'Eczema', details: 'Chronic skin condition.', precautions: 'Use moisturizer, avoid irritants.' },
                { name: 'Psoriasis', details: 'Skin disorder.', precautions: 'Follow treatment, avoid triggers.' },
                { name: 'Chickenpox', details: 'Viral infection with skin blisters.', precautions: 'Avoid scratching, stay isolated.' }
            ]},
            { symptom: 'joint pain', diagnoses: [
                { name: 'Arthritis', details: 'Inflammation of joints.', precautions: 'Exercise, manage weight.' },
                { name: 'Lupus', details: 'Autoimmune disease affecting joints.', precautions: 'Follow treatment, avoid sunlight.' },
                { name: 'Gout', details: 'Uric acid buildup in joints.', precautions: 'Avoid red meat, limit alcohol.' },
                { name: 'Lyme Disease', details: 'Infection from tick bite.', precautions: 'Avoid tick-prone areas, wear protective clothing.' }
            ]},
            { symptom: 'dizziness', diagnoses: [
                { name: 'Vertigo', details: 'Sensation of spinning.', precautions: 'Avoid sudden movements, rest.' },
                { name: 'Dehydration', details: 'Lack of fluids.', precautions: 'Drink water, rest.' },
                { name: 'Low Blood Pressure', details: 'Low blood flow to the brain.', precautions: 'Eat small meals, stay hydrated.' },
                { name: 'Anemia', details: 'Low red blood cells.', precautions: 'Eat iron-rich foods, take supplements if prescribed.' }
            ]}
        ];

        const matchingCondition = conditions.find((condition) =>
            condition.symptom.toLowerCase() === symptom.toLowerCase()
        );

        if (matchingCondition) {
            setResults(matchingCondition.diagnoses);
        } else {
            setResults([{ name: 'No matching conditions found', details: 'Please enter a common symptom.', precautions: '' }]);
        }
    };

    const handleReset = () => {
        setResults([]);
    };

    return (
        <div className="box"> {/* Wrapper for the components */}
            <Header />
            <SymptomsForm onSubmit={handleSymptomSubmit} />
            <Results results={results} />
            {results.length > 0 && (
                <button onClick={handleReset} className="reset-button">Reset</button>
            )}
        </div>
        
    );
}

export default App;
