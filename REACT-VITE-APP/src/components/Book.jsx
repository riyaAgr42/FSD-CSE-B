import React from 'react'
import '../index.css'

const Book = ({book}) => {
  return (
    <div className='card'>
      <img src="" width="200" height="200"  alt="book image"/>
      <h3>Title:{book.title}</h3>
      <h4>Price:₹{book.price}/-</h4>
      <button>Add to cart</button>

    </div>
  )
}

export default Book
