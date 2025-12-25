import { useEffect, useState } from "react";
import api from "../services/api";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("/books")
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  const addToCart = async (bookId) => {
    try {
      await api.post(`/cart/add/${bookId}`);
      alert("Added to cart ✅");
    } catch (err) {
      alert("Login required ❌");
    }
  };

  return (
    <div>
      <h2>Books</h2>

      {books.map(book => (
        <div key={book.id} style={{ marginBottom: "15px" }}>
          <h4>{book.title}</h4>
          <p>₹{book.price}</p>
          <button onClick={() => addToCart(book.id)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
