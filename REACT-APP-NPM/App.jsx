import Book from './Book';
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
 export default App;