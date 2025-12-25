import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={{ background: "#222", padding: "10px" }}>
      <Link style={{ color: "white", marginRight: "10px" }} to="/">Home</Link>
      <Link style={{ color: "white", marginRight: "10px" }} to="/cart">Cart</Link>
      <Link style={{ color: "white", marginRight: "10px" }} to="/orders">Orders</Link>

      {user?.role === "ADMIN" && (
        <Link style={{ color: "white", marginRight: "10px" }} to="/admin">Admin</Link>
      )}

      {!user ? (
        <Link style={{ color: "white" }} to="/login">Login</Link>
      ) : (
        <button onClick={logout} style={{ marginLeft: "10px" }}>
          Logout
        </button>
      )}
    </div>
  );
}
