import React from "react";
import ReactDOM from "react-dom/client";
const AddTrainer = () => {
    const addTrainerFunc=(e)=>{
        e.preventDefault()

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const exp = document.getElementById("exp").value;
        const ad_id = document.getElementById("admin_id").value

        fetch("http://127.0.0.1:8000/api/create_trainer/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name:name,email:email,exp:exp,ad_id:ad_id})
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
  return (
    <div>
      <input type="text" placeholder="Enter trainer name" required id="name" />
      <input type="email" placeholder="Enter trainer email" required id="email" />
      <input
        type="text"
        placeholder="Enter trainer working exp"
        required
        id="exp"
      />
      <input type="text"  id="admin_id" placeholder="enter admin id here"/>
      <button onClick={addTrainerFunc}>Submit</button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AddTrainer />);

export default AddTrainer;
