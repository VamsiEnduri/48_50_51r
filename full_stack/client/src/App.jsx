import React from 'react'
import AdminReg from './adminReg'
const App = () => {
  return (
    <div>
      <AdminReg />
    </div>
  )
}

export default App

// import "./App.css";
// import { useState } from "react";

// function App() {
//   // useState initializes a state variable and updater function
//   const [initialValue, updaterFunction] = useState(0);
//   const [color,setColor]=useState("yellow")

//   function incre() {
//     updaterFunction(initialValue + 1); 
//     setColor("green")
//   }

//   function decre() {
//     updaterFunction(initialValue - 1);
//     setColor("red")
//   }

//   return (
//     <div style={{backgroundColor:color}}>
//       <button onClick={incre}>+1</button>
//       <h2>{initialValue}</h2>
//       <button onClick={decre}>-1</button>
//     </div>
//   );
// }

// export default App;
