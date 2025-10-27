function Book({ book }) {
  return (
    <div className="card">
      <img src={book.image} width="220" height="200" alt="Book Image" />
      <h3 className="content">Title: {book.title}</h3>
      <h4 className="content">Price: ₹{book.price}/-</h4>
      <button className="btn">Add to Cart</button>
    </div>
  );
}
export default Book;
