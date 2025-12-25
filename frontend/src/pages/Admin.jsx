import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "ADMIN") {
      navigate("/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <nav>
        <Link to="/admin/books">Books</Link> |{" "}
        <Link to="/admin/users">Users</Link> |{" "}
        <Link to="/admin/orders">Orders</Link>
      </nav>

      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}
