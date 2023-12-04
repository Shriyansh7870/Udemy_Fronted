import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "./Login.css";

function LogIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://udemy-backend-kutp.onrender.com/api/login", data)
      .then((res) => {
        alert(res.data.msg);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.name);
        console.log(res.data);
        if (res.data.token) {
          navigate("/");
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="center">
        <h1 className="heading">Log in</h1>
        <form className="loginform" onSubmit={handleSubmit}>
          <label className="word" htmlFor="email">
            Email:
          </label>
          <input
            className="textnow"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={data.email}
          />
          <br />
          <br />
          <label className="word" htmlFor="password">
            Password:
          </label>
          <input
            className="text1after"
            type="password"
            maxLength="8"
            name="password"
            id="password"
            onChange={handleChange}
            value={data.password}
          />
          <br />
          <br />
          <button className="button4" type="submit">
            Submit
          </button>
        </form>
        <div className="or">OR</div>

        <NavLink to="/register" className="nextpage">
          Please Register First
        </NavLink>
      </div>
      <Footer />
    </>
  );
}

export default LogIn;
