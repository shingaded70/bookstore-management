import { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Book Store</h1>

      {books.map(book => (
        <div key={book.id} style={{ marginBottom: "10px" }}>
          <b>{book.title}</b> – ₹{book.price}
          <br />
          <button
            onClick={() =>
              fetch(`http://localhost:8080/api/cart/add/${book.id}`, {
                method: "POST"
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
