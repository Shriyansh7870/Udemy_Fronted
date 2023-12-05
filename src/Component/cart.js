import React, { useState, useEffect } from "react";

import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import Footer from "./Footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    axios
      .get("https://udemy-backend-kutp.onrender.com/api/getaddCart")
      .then((res) => setCartItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleRemoveCart = async (itemId) => {
    await axios
      .post("https://udemy-backend-kutp.onrender.com/api/getdataRemove", {
        id: itemId,
      })
      .then((res) => console.log(res.data));

    axios
      .get("https://udemy-backend-kutp.onrender.com/api/getaddCart")
      .then((res) => setCartItems(res.data));
  };
  useEffect(() => {
    let value = 0;
    cartItems.map((item) => (value += item.price));
    setSum(value);
  }, [cartItems]);

  const stripePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OFIomSI0xtOp9M4Lx8yK0ymk7DICp3GTuxeSCzdqrXq848U4YfGuir1l5NIU5NYyrgKk0vgYSQ6eF7OLBPHEYFJ00agxvY8do"
    );

    const body = {
      Cartitem: cartItems,
      Total: sum,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "https://udemy-backend-kutp.onrender.com/out/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    await axios.post(
      "https://udemy-backend-kutp.onrender.com/api/datapush",
      cartItems
    );

    await axios.delete(
      "https://udemy-backend-kutp.onrender.com/api/deleteCard"
    );
    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <>
      <h2 className="headcart">Cart</h2>

      <div className="cart-content">
        <div className="headOfcart">
          <h4>Product</h4>
          <h4>Title</h4>
          <h4>Price</h4>
          <h4>Course Name</h4>
        </div>
        <div className="CartConatiner">
          {cartItems &&
            cartItems.map((item, index) => (
              <div className="childCartConatiner" key={index}>
                <div className="cartDiv">
                  <img className="CartImage" src={item.image} alt="Not Found" />
                </div>
                <div>{item.description}</div>
                <div className="CartPrice">{item.price}</div>
                <div className="CartName">{item.type}</div>

                <div className="CartRating">{item.Rating}⭐⭐⭐⭐⭐</div>

                <button
                  className="RemoveButtton"
                  onClick={() => handleRemoveCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
        </div>
        <div className="buy">
          <button onClick={stripePayment}>checkout</button>
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
