
import ReactDOM from 'react-dom/client'
import '/style.css';
function Book({book}){
  return (
    <div className="card">
      <img src={book.image} height="200" width="200" alt="book-image"/>
      <h3>Title:{book.title}</h3>
      <h4>Price :₹{book.price}</h4>
      <button>Add to Cart</button>
    </div>
  )
}

const books=[
  {image:"https://5.imimg.com/data5/HX/TD/MY-14344381/nootan-physics-xii-book-500x500.png",title:"Physics",price:785},
  {image:"https://m.media-amazon.com/images/I/51h9sGGmbdL._UF1000,1000_QL80_.jpg",title:"Maths",price:985},
  {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1eQLxHzersIRrQEMw-qK1QqRNEQU-K6POMA&s",title:"Chemistry",price:885}
]

function App(){
  return(
    <div className='booklist'>
      {books.map((b,i)=>(
        <Book key={i} book={b}/>
      ))}
    </div>
  )
}

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<App/>)
