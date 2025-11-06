import "./App.css";
import Book from "./components/Book";

function App() {
  const book={image:"https://m.media-amazon.com/images/I/81L-c3G66eL.jpg",title:"Physics",price:343}
  return (
    <div>
      <h1> My Book Store</h1>
      <Book book={book} />
    </div>
  );
}

export default App;
