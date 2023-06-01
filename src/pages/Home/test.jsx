import React, { useState } from 'react';

function Table() {
    const [data, setData] = useState([
        { name: 'John Doe', email: 'john@example.com', phone: '555-1234' },
        { name: 'Jane Doe', email: 'jane@example.com', phone: '555-5678' }
    ]);

    function handleEdit(event, rowIndex, colIndex) {
        const newValue = event.target.innerText;
        setData(prevData => {
            const newData = [...prevData];
            newData[rowIndex][Object.keys(newData[rowIndex])[colIndex]] = newValue;
            return newData;
        });
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {Object.values(row).map((cell, colIndex) => (
                            <td
                                key={colIndex}
                                contentEditable={true}
                                onBlur={(event) => handleEdit(event, rowIndex, colIndex)}
                            >
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default Table;