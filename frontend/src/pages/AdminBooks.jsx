import { useEffect, useState } from "react";

export default function AdminBooks() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const token = localStorage.getItem("token");

  const loadBooks = async () => {
    const res = await fetch("http://localhost:8080/api/admin/books", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setBooks(await res.json());
  };

  useEffect(() => { loadBooks(); }, []);

  const addBook = async () => {
    await fetch("http://localhost:8080/api/admin/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title, price: 100, stockQuantity: 10 })
    });
    setTitle("");
    loadBooks();
  };

  const deleteBook = async (id) => {
    await fetch(`http://localhost:8080/api/admin/books/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    loadBooks();
  };

  return (
    <>
      <h2>📚 Books</h2>

      <input
        placeholder="Book title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={addBook}>Add Book</button>

      <ul>
        {books.map(b => (
          <li key={b.id}>
            {b.title}
            <button onClick={() => deleteBook(b.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
