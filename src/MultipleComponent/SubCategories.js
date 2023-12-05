import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Component/Footer";
import { NavLink } from "react-router-dom";
const SubCategories = () => {
  const params = useParams();
  const newOne = params.name;
  const [data, setData] = useState([]);
  const [kuchv, setKuchv] = useState([]);
  const [items, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://udemy-backend-kutp.onrender.com/api/datafind")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [params]);
  useEffect(() => {
    axios
      .get("https://udemy-backend-kutp.onrender.com/api/getaddCart")
      .then((res) => setItem(res.data))
      .catch((err) => console.log("cart error", err));
  }, []);

  const handleAddToCart = async (item) => {
    const letsfind = items.find((items) => items.id === item.id);
    console.log(items);
    if (letsfind) {
      alert("items is already added Go to cart");
    } else {
      await axios.post(
        "https://udemy-backend-kutp.onrender.com/api/addtoCart",
        item
      );
    }
    axios
      .get("https://udemy-backend-kutp.onrender.com/api/getaddCart")
      .then((res) => setItem(res.data));
    console.log(letsfind);
  };

  useEffect(() => {
    setKuchv(data.filter((item) => item.name === newOne));
  }, [data, newOne]);
  const popular = [
    "Digital Marketing",
    "Social Media Marketing",
    "Facebook Ads",
    "Marketing Strategy",
    "ChatGPT",
  ];
  const popular2 = [
    "SEO",
    "Google Ads",
    "Instagram Marketing",
    "Copywriting",
    "Facebook Marketing",
  ];
  return (
    <>
      <div className=" navbar1">
        <div className="navabarSecond">
          <div>Web Development➡️</div>
          <div>Data Science</div>
          <div>Mobile Development</div>
          <div>Programming Language</div>
          <div>Game Development</div>
        </div>
      </div>
      <div className="parentConatinerForAll">
        <div className="mainContain">
          <h1>Business Courses</h1>
          <h2>Courses to get you started</h2>
          <h3>Most Popular</h3>
        </div>
        <div className="MainContainer">
          {kuchv
            .slice(0, 5)
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
                  onClick={() => handleAddToCart(item)}
                >
                  AddToCart
                </button>
              </div>
            ))}
        </div>
        <h1>Featured course</h1>
        <div className="Features">
          {kuchv.slice(0, 1).map((item, index) => (
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
                  onClick={() => handleAddToCart(item)}
                >
                  AddToCart
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
          {kuchv.slice(0, 5).map((item, index) => (
            <div className="child_container" key={index}>
              <div className="laptop_div">
                <img className="MainImage" src={item.image} alt="Not Found" />
              </div>
              <div>{item.description.slice(0, 50)}</div>
              <div className="LaptopmodelName">{item.instructor}</div>
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
              {kuchv.slice(0, 10).map((item, index) => (
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
                    <div className="singleRating">{item.Rating}⭐⭐⭐⭐⭐</div>
                    <div className="singlePrice">{item.price}</div>
                    <div className="Bestseller">Best Seller</div>
                    <button
                      className="AddToCartButton"
                      onClick={() => handleAddToCart(item)}
                    >
                      AddToCart
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

export default SubCategories;
