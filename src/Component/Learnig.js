import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
const Learning = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://udemy-backend-kutp.onrender.com/api/getLearning")
      .then((res) => setCartItems(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(cartItems);
  return (
    <>
      <h2 className="LearingforFuture">Learning For Future</h2>
      <div className="CartConatiner1">
        {cartItems &&
          cartItems.map((item, index) => (
            <div className="childCartConatiner" key={index}>
              <div className="cartDiv">
                <img className="CartImage" src={item.image} alt="Not Found" />
              </div>
              <div>{item.description}</div>
              <div className="CartName">{item.type}</div>

              <div className="CartRating">{item.Rating}⭐⭐⭐⭐⭐</div>
            </div>
          ))}
      </div>
      <div></div>
      <Footer />
    </>
  );
};

export default Learning;
