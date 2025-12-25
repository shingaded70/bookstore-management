import { useEffect, useState } from "react";

export default function Cart() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const load = async () => {
    const res = await fetch("http://localhost:8080/api/cart");
    setItems(await res.json());

    const t = await fetch("http://localhost:8080/api/cart/total");
    setTotal((await t.json()).total);
  };

  useEffect(() => { load(); }, []);

  const remove = async (id) => {
    await fetch(`http://localhost:8080/api/cart/remove/${id}`, { method: "DELETE" });
    load();
  };

  const placeOrder = async () => {
    await fetch("http://localhost:8080/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items)
    });
    await fetch("http://localhost:8080/api/cart/clear", { method: "DELETE" });
    alert("Order placed!");
    load();
  };

  return (
    <div>
      <h2>Cart</h2>
      {items.map(i => (
        <div key={i.id}>
          {i.title} × {i.quantity}
          <button onClick={() => remove(i.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}
