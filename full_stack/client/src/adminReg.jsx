import React, { useEffect, useState } from 'react';

const AdminReg = () => {
    const [bgGradient, setBgGradient] = useState('linear-gradient(135deg, #ff9a9e, #fad0c4)');

    // Animate background gradient
    useEffect(() => {
        const gradients = [
            'linear-gradient(135deg, #ff9a9e, #fad0c4)',
            'linear-gradient(135deg, #a1c4fd, #c2e9fb)',
            'linear-gradient(135deg, #d4fc79, #96e6a1)',
            'linear-gradient(135deg, #fbc2eb, #a6c1ee)',
            'linear-gradient(135deg, #84fab0, #8fd3f4)'
        ];
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % gradients.length;
            setBgGradient(gradients[index]);
        }, 5000); // Change gradient every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const regsiterAdmin = (e) => {
        e.preventDefault();
        alert("Hello admin register form");
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const newAdmin = { name, email, password };

        fetch("http://127.0.0.1:8000/api/admin_register/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newAdmin)
        })
        .then(res => res.json())
        .then(res =>{
             console.log(res)
             alert("admin registration successfully done")
             window.location.href="../public/adminFeatures.html"
        }
    )
        .catch(err => console.log(err));
    }

    const formStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
        gap: "15px",
        padding: "30px",
        maxWidth: "400px",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "15px",
        backdropFilter: "blur(15px)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        transition: "all 0.5s ease"
    };

    const inputStyle = {
        width: "100%",
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid rgba(255,255,255,0.3)",
        background: "rgba(255,255,255,0.2)",
        color: "#fff",
        fontSize: "16px",
        outline: "none",
        backdropFilter: "blur(5px)",
    };

    const buttonStyle = {
        width: "100%",
        padding: "12px",
        borderRadius: "10px",
        border: "none",
        background: "rgba(255, 255, 255, 0.25)",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer",
        transition: "0.3s",
    };

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: bgGradient,
            transition: "background 1s ease"
        }}>
            <h1 style={{color:"#fff", textShadow:"1px 1px 4px rgba(0,0,0,0.5)"}}>Admin Registration Form</h1>
            <form style={formStyle}>
                <input type="text" placeholder='Enter admin name' required id='name' style={inputStyle}/>
                <input type="email" placeholder='Enter admin email' required id='email' style={inputStyle}/>
                <input type="password" placeholder='Enter admin password' required id='password' style={inputStyle}/>
                <button onClick={regsiterAdmin} style={buttonStyle}
                    onMouseEnter={e => e.target.style.background="rgba(255,255,255,0.4)"}
                    onMouseLeave={e => e.target.style.background="rgba(255,255,255,0.25)"}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AdminReg;
