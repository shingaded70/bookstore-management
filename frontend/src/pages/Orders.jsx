import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/orders")
      .then(r => r.json())
      .then(setOrders);
  }, []);

  return (
    <div>
      <h2>My Orders</h2>

      {orders.length === 0 && <p>No orders</p>}

      {orders.map(o => (
        <div key={o.id}>
          <b>Order #{o.id}</b>
          <ul>
            {o.items.map(i => (
              <li key={i.id}>{i.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
