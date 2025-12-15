import React from 'react'
import ReactDOM from "react-dom/client"
const AdminFeatures = () => {
    const addTrainerFunc=(e)=>{
        e.preventDefault()
        alert("add trauner")
        window.location.href="../public/addTrainer.html"

    }

     const addBatchFunc=(e)=>{
        e.preventDefault()
        alert("add addBatchFunc")

    }

    const addStudentsFunc=(e)=>{
        e.preventDefault()
        alert("add addStudentsFunc")

    }


    
    
  return (
    <div>
        <button onClick={addTrainerFunc}>AddTrainer</button>
        <button onClick={addBatchFunc}>AddBatch</button>
        <button onClick={addStudentsFunc}>AddStudents</button>
         </div>
  )
}
ReactDOM.createRoot(document.getElementById("root")).render(<AdminFeatures/>)


export default AdminFeatures