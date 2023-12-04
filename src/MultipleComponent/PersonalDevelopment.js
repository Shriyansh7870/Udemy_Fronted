import React, { useState, useEffect } from "react";
import axios from "axios";
import "../MultipleComponent/Multiple.css";
import { NavLink } from "react-router-dom";
import Footer from "../Component/Footer";

const PersonalDevelopment = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const popular = [
    "Life Coach Training",
    "ChatGPT",
    "Leadership",
    "Personal Productivity",
    "Speed Reading",
  ];
  const popular2 = [
    " Personal Development",
    "Neuro-Lingustic Programming",
    "Communication Skills",
    "Personal Transformation",
    "Memory",
  ];

  useEffect(() => {
    axios
      .get("https://udemy-backend-kutp.onrender.com/api/datafind")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);
  useEffect(() => {
    axios
      .get("https://udemy-backend-kutp.onrender.com/api/datafind1")
      .then((res) => {
        setData1(res.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);

  const handleAddToCart = (itemName) => {
    console.log(`Added ${itemName} to the cart`);
  };

  return (
    <>
      <div className=" navbar">
        <div className="navabarSecond">
          <div>Personal Development➡️</div>
          <div>personal Transformation</div>
          <div>Personal Productivity</div>
          <div>Leadership</div>
          <div>Carrer Development</div>
        </div>
      </div>
      <div className="parentConatinerForAll">
        <div className="mainContain">
          <h1>Personal Development Courses</h1>
          <h2>Courses to get you started</h2>
          <h3>Most Popular</h3>
        </div>
        <div className="MainContainer">
          {data
            .filter((item) => item.name === "Personal Transformation")
            .slice(0, 5)
            .map((item, index) => (
              <div className="child_container" key={index}>
                <div className="laptop_div">
                  <img className="MainImage" src={item.image} alt="Not Found" />
                </div>
                <div>{item.description.slice(0, 50)}</div>
                <div className="LaptopmodelName">{item.instructor}</div>
                <div className="">{item.Rating}⭐⭐⭐⭐⭐</div>
                <div className="Price-of-All">{item.price}</div>

                <button
                  className="AddToCartButton"
                  onClick={() => handleAddToCart(item.name)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
        <h1>Featured course</h1>
        <div className="Features">
          {data
            .filter((item) => item.id === "193")
            .slice(0, 5)
            .map((item, index) => (
              <div className="singleCard" key={index}>
                <div className="">
                  <img
                    className="featuresImage"
                    src={item.image}
                    alt="Not Found"
                  />
                </div>

                <div className="carddescription">
                  <div>{item.name}</div>
                  {item.description}

                  <div className="instructorname">{item.instructor}</div>
                  <div className="singleRating">{item.Rating}⭐⭐⭐⭐⭐</div>
                  <div className="singlePrice">{item.price}</div>

                  <button
                    className="AddToCartButton"
                    onClick={() => handleAddToCart(item.name)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
        <h1>Popular topics</h1>
        <div className="PopularToic">
          {popular.map((item, index) => {
            return (
              <NavLink className="populartopicname" to={`/subcategory/${item}`}>
                <li key={index}>{item}</li>
              </NavLink>
            );
          })}
        </div>
        <div className="PopularToic">
          {popular2.map((item, index) => {
            return (
              <NavLink className="populartopicname" to={`/subcategory/${item}`}>
                <li key={index}>{item}</li>
              </NavLink>
            );
          })}
        </div>
        <h2>Popular Instructors</h2>

        <div className="Instructor">
          {data1
            .filter((item) => item.type === "Personal Development")
            .map((item, index) => (
              <div className="child_container" key={index}>
                <div className="laptop_div">
                  <img
                    className="MainImage"
                    src={item.teacher}
                    alt="Not Found"
                  />
                </div>
                <div>{item.description}</div>
                <div className="LaptopmodelName">{item.name}</div>
                <div className="subject">{item.subject}</div>
                <div className="course">{item.number}</div>
                <div className="">{item.Rating}⭐⭐⭐⭐⭐</div>
              </div>
            ))}
        </div>
        <div className="parentRating">
          <div className="leftRatingDiv">
            <h2>Ratings</h2>
            <div>⚪⭐⭐⭐⭐⭐ 4.5 & up (10,000)</div>
            <div>⚪⭐⭐⭐⭐⭐ 3.5 & up (10,000)</div>
            <div>⚪⭐⭐⭐⭐⭐ 3.8 & up (10,000)</div>
            <div>⚪⭐⭐⭐⭐⭐ 4.8 & up (10,000)</div>
            <hr></hr>
            <h2>Viedo Duration</h2>
            <div>⬜ 0-1hour (2,521)</div>
            <div>⬜ 0-1hour (5,521)</div>
            <div>⬜ 0-1hour (6,521)</div>
            <div>⬜ 0-1hour (5,521)</div>
            <div>Show More</div>
            <hr></hr>
            <div>Topic</div>
            <hr></hr>
            <div>SubCategory</div>
            <hr></hr>
            <div>Level</div>
            <hr></hr>
            <div>Language</div>
            <hr></hr>
            <div>Price</div>
            <hr></hr>
            <div>Features</div>
            <hr></hr>
            <div>Subtitles</div>
            <hr></hr>
          </div>
          <div className="RightRatingDiv">
            <div className="Features">
              {data
                .filter(
                  (item) =>
                    item.name === "Personal Productivity" ||
                    item.name === "Personal Transformation"
                )

                .slice(0, 10)
                .map((item, index) => (
                  <div className="singleCard" key={index}>
                    <div className="">
                      <img
                        className="AllImageForTeacher"
                        src={item.image}
                        alt="Not Found"
                      />
                    </div>

                    <div className="carddescription">
                      <h3>{item.type}</h3>
                      {item.description}

                      <div className="instructorname">{item.instructor}</div>
                      <div className="singleRating">
                        {item.Rating}⭐⭐⭐⭐⭐
                      </div>
                      <div className="singlePrice">{item.price}</div>
                      <div className="Bestseller">Best Seller</div>
                      <button
                        className="AddToCartButton"
                        onClick={() => handleAddToCart(item.name)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PersonalDevelopment;
