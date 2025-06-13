import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, []);

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="orders-list">
          <h2>Your Orders</h2>
          <ul>
            {orders.map((order) => (
              <li key={order._id}>
                <strong>{order.name}</strong> - {order.qty} @ ₹{order.price} ({order.mode})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Orders;
