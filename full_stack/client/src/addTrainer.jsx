import React, { useState } from "react";
import ReactDOM from "react-dom/client";
const AddTrainer = () => {
  const [trainers, setTrainers] = useState([]);
  const [editForm, setEditForm] = useState(false);
  
//  if (trainers.length==0){
//     return <h2>no any trainers found in db</h2>
//   }

  function edit_emp(id) {
    setEditForm(!editForm)  
  }

  function delete_trainer_func(id) {
    alert(id);
    fetch(`/api/delete_trainer/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetch_trainers();
      });
  }

  function fetch_trainers() {
    fetch("/api/get_trainers")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data)
        setTrainers(res.data);
      })
      .catch((err) => console.log(err));
  }
  setTimeout(() => {
    if (trainers.length == 0) {
      fetch_trainers();
    }
  }, 2000);
  console.log(trainers, "trainers");

  const addTrainerFunc = (method) => {
    // e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const exp = document.getElementById("exp").value;
    const ad_id = document.getElementById("admin_id").value;

    fetch("http://127.0.0.1:8000/api/create_trainer/", {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        exp: exp,
        ad_id: ad_id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert("admin registration successfully done");
        fetch_trainers();
        document.getElementById("form").reset();
        //  window.location.href="../public/adminFeatures.html"
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form id="form">
        <input
          type="text"
          placeholder="Enter trainer name"
          required
          id="name"
        />
        <input
          type="email"
          placeholder="Enter trainer email"
          required
          id="email"
        />
        <input
          type="text"
          placeholder="Enter trainer working exp"
          required
          id="exp"
        />
        <input type="text" id="admin_id" placeholder="enter admin id here" />
        <button onClick={()=>{addTrainerFunc("POST")}}>Submit</button>
      </form>
      <div>
        <h1>10000CODERS</h1>
        {trainers.map((x) => {
          return (
            <div>
              <h1>{x.name}</h1>
              <p>{x.email}</p>
              <span>{x.exp} exp</span>
              <button
                onClick={() => {
                  edit_emp(x.id);
                }}
              >
                edit
              </button>
              <button
                onClick={() => {
                  delete_trainer_func(x.id);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>

      {editForm && (
        <form id="form">
          <input
            type="text"
            placeholder="Enter trainer name"
            required
            id="name"
          />
          <input
            type="email"
            placeholder="Enter trainer email"
            required
            id="email"
          />
          <input
            type="text"
            placeholder="Enter trainer working exp"
            required
            id="exp"
          />
          <input type="text" id="admin_id" placeholder="enter admin id here" />
          <button onClick={()=>{addTrainerFunc("PUT")}}>Submit</button>
        </form>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AddTrainer />);

export default AddTrainer;


