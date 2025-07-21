import React from 'react';

function Results({ results }) {
    if (results.length === 0) return null;

    return (
        <div className="results-table">
            <table>
                <thead>
                    <tr>
                        <th>Disease Name</th>
                        <th>Details</th>
                        <th>Precautions</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result, index) => (
                        <tr key={index}>
                            <td>{result.name}</td>
                            <td>{result.details}</td>
                            <td>{result.precautions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Results;
