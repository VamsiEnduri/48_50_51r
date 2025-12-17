import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const AddTrainer = () => {
  const [trainers, setTrainers] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [editTrainer, setEditTrainer] = useState(null);

  // Fetch trainers
  const fetch_trainers = () => {
    fetch("/api/get_trainers")
      .then((res) => res.json())
      .then((res) => setTrainers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch_trainers();
  }, []);

  const editTrainerFunc = (id) => {
    const trainer = trainers.find((x) => x.id === id);
    let c=confirm("do you wanna edit the trainer  ?")
    if (c){
    setEditTrainer(trainer);
    setEditForm(true);
    }

  };

  const deleteTrainerFunc = (id) => {
    let c=confirm("do you wanna delete teh trainer ?")
    if (c){
      fetch(`/api/delete_trainer/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => fetch_trainers())
      .catch((err) => console.log(err));
    }
  };

  const addOrUpdateTrainer = (method, formId) => {
    const form = document.getElementById(formId);
    const name = form.querySelector("#name").value;
    const email = form.querySelector("#email").value;
    const exp = form.querySelector("#exp").value;
    const ad_id = form.querySelector("#admin_id").value;

    const url =
      method === "POST"
        ? "/api/create_trainer/"
        : `/api/edit_trainer/${editTrainer.id}`;

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, exp, ad_id }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Trainer saved successfully!");
        fetch_trainers();
        form.reset();
        if (method === "PUT") setEditForm(false);
      })
      .catch((err) => console.log(err));
  };

  // Styles
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2, #e0c3fc)",
    minHeight: "100vh",
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  };

  const formStyle = {
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: "25px",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "350px",
    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
  };

  const buttonStyle = {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    backgroundColor: "#6a11cb",
    color: "white",
    transition: "0.3s",
  };

  const buttonHoverStyle = (e) => {
    e.target.style.backgroundColor = "#2575fc";
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "90%",
    maxWidth: "800px",
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(31,38,135,0.37)",
  };

  const thTdStyle = {
    padding: "12px 15px",
    textAlign: "left",
    borderBottom: "1px solid rgba(255,255,255,0.3)",
  };

  const headerStyle = {
    backgroundColor: "rgba(106,17,203,0.8)",
    color: "white",
    fontWeight: "bold",
  };

  const actionButtonStyle = {
    ...buttonStyle,
    padding: "6px 12px",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: "#4B0082" }}>10000CODERS</h1>

      {/* Add Trainer Form */}
      <form id="formPostData" style={formStyle}>
        <input type="text" placeholder="Enter trainer name" required id="name" style={inputStyle} />
        <input type="email" placeholder="Enter trainer email" required id="email" style={inputStyle} />
        <input type="text" placeholder="Enter trainer working exp" required id="exp" style={inputStyle} />
        <input type="text" placeholder="Enter admin id here" id="admin_id" style={inputStyle} />
        <button
          type="button"
          style={buttonStyle}
          onMouseOver={buttonHoverStyle}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#6a11cb")}
          onClick={() => addOrUpdateTrainer("POST", "formPostData")}
        >
          Add Trainer
        </button>
      </form>

      {/* Trainers Table */}
      {trainers.length > 0 && (
        <table style={tableStyle}>
          <thead>
            <tr style={headerStyle}>
              <th style={thTdStyle}>ID</th>
              <th style={thTdStyle}>Name</th>
              <th style={thTdStyle}>Email</th>
              <th style={thTdStyle}>Experience</th>
              <th style={thTdStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainers.map((x) => (
              <tr key={x.id}>
                <td style={thTdStyle}>{x.id}</td>
                <td style={thTdStyle}>{x.name}</td>
                <td style={thTdStyle}>{x.email}</td>
                <td style={thTdStyle}>{x.exp} yrs</td>
                <td style={thTdStyle}>
                  <button
                    style={actionButtonStyle}
                    onMouseOver={buttonHoverStyle}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#6a11cb")}
                    onClick={() => editTrainerFunc(x.id)}
                  >
                    Edit
                  </button>{" "}
                  <button
                    style={{ ...actionButtonStyle, backgroundColor: "#ff416c" }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#ff4b2b")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#ff416c")}
                    onClick={() => deleteTrainerFunc(x.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Edit Trainer Form */}
      {editForm && (
        <form id="formPutData" style={formStyle}>
          <input type="text" placeholder="Enter trainer name" required id="name" style={inputStyle} defaultValue={editTrainer.name} />
          <input type="email" placeholder="Enter trainer email" required id="email" style={inputStyle} defaultValue={editTrainer.email} />
          <input type="text" placeholder="Enter trainer working exp" required id="exp" style={inputStyle} defaultValue={editTrainer.exp} />
          <input type="text" placeholder="Enter admin id here" id="admin_id" style={inputStyle} defaultValue={editTrainer.admin_id} />
          <button
            type="button"
            style={buttonStyle}
            onMouseOver={buttonHoverStyle}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#6a11cb")}
            onClick={() => addOrUpdateTrainer("PUT", "formPutData")}
          >
            Update Trainer
          </button>
        </form>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AddTrainer />);
export default AddTrainer;
