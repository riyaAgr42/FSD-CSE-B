import React from "react";
import './App.css'
import ReactDOM from "react-dom/client";

// function Book() {
//   return (
//     <div className="card">
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57O-Dg-pCgBFQ1dQzacOnBjCawR-HGmaZtA&s" width="220" height="200" alt="Book Image" />
//       <h3 className="content">Title: Physics</h3>
//       <h4 className="content">Price: ₹371/-</h4>
//       <button className="btn">Add to Cart</button>
//     </div>
//   );
// }

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(<Book  />);
