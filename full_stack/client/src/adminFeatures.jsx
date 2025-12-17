import React from 'react';
import ReactDOM from "react-dom/client";

const AdminFeatures = () => {
    const addTrainerFunc = (e) => {
        e.preventDefault();
        alert("Add Trainer");
        window.location.href = "../public/addTrainer.html";
    };

    const addBatchFunc = (e) => {
        e.preventDefault();
        alert("Add Batch");
    };

    const addStudentsFunc = (e) => {
        e.preventDefault();
        alert("Add Students");
    };

    // Inline styles
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        fontFamily: 'Arial, sans-serif'
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#4CAF50',
        color: 'white',
        transition: '0.3s'
    };

    const hoverStyle = {
        backgroundColor: '#45a049'
    };

    return (
        <div style={containerStyle}>
            <button 
                style={buttonStyle} 
                onClick={addTrainerFunc}
                onMouseOver={e => e.target.style.backgroundColor = hoverStyle.backgroundColor}
                onMouseOut={e => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
                Add Trainer
            </button>

            <button 
                style={buttonStyle} 
                onClick={addBatchFunc}
                onMouseOver={e => e.target.style.backgroundColor = hoverStyle.backgroundColor}
                onMouseOut={e => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
                Add Batch
            </button>

            <button 
                style={buttonStyle} 
                onClick={addStudentsFunc}
                onMouseOver={e => e.target.style.backgroundColor = hoverStyle.backgroundColor}
                onMouseOut={e => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
                Add Students
            </button>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AdminFeatures/>);

export default AdminFeatures;
