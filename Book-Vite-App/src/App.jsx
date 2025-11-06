import React from "react";
import Book from "./component/Book.jsx";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";

const App = () => {

const book=[
  {image:"https://img.clevup.in/418144/SKU-0249_0-1739107582780.jpg?width=600&format=webp",title:"Physics",price:785},
  {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZFsPirEzfbgRpu2KMXPPyQBukQsrB-G2eWA&s",title:"Chemistry",price:985},
  {image:"https://www.vivadigital.in/vupload/books/booku_201124170436_34.jpg",title:"Mtahs",Price:685},
  {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9XGY6aS1a7aWVlW7NYY60z_HeWwdn6UFyw&s",title:"Biology",price:1285},
  {image:"https://img.freepik.com/free-vector/english-book-illustration-design_23-2149507594.jpg?semt=ais_hybrid&w=740&q=80",title:"English",price:585},
  {image:"https://5.imimg.com/data5/KE/TA/MY-25628772/hindi-book.jpg",title:"Hindi",price:385},
]



  return (
    <div>
      <Header />
      <div className="book-list">
        {/* <Book />
        <Book />
        <Book /> */}
        {book.map((b,i)=>(
          <Book key={i} book={b} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
