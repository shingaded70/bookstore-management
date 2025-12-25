import { useEffect, useState } from "react";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const token = localStorage.getItem("token");

  const loadUsers = async () => {
    const res = await fetch("http://localhost:8080/api/admin/users", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setUsers(await res.json());
  };

  useEffect(() => { loadUsers(); }, []);

  const addUser = async () => {
    await fetch("http://localhost:8080/api/admin/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        email,
        password: "123456",
        role: "USER"
      })
    });
    setEmail("");
    loadUsers();
  };

  const deleteUser = async (id) => {
    await fetch(`http://localhost:8080/api/admin/users/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    loadUsers();
  };

  return (
    <>
      <h2>👤 Users</h2>

      <input
        placeholder="User email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.email}
            <button onClick={() => deleteUser(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
