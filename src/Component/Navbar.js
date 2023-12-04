import React, { useState } from "react";
import { NavLink, BrowserRouter, Route, Routes } from "react-router-dom";
import "../CssComponent/Navbar.css";
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import WebDevelopment from "../MultipleComponent/WebDevelopment";
import Business from "../MultipleComponent/Business";
import Finance from "../MultipleComponent/Finance";
import Health from "../MultipleComponent/Health";
import IT from "../MultipleComponent/IT";
import Marketing from "../MultipleComponent/Marketing";
import Music from "../MultipleComponent/Music";
import Office from "../MultipleComponent/Office";
import PersonalDevelopment from "../MultipleComponent/PersonalDevelopment";
import Home from "./Home";
import LogIn from "./Login";
import Register from "./Signup";
import TechOnUdemy from "./TechOnUdemy";
import SubCategories from "../MultipleComponent/SubCategories";
import cart from "../Component/cart";
import Cart from "../Component/cart";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const arr1 = [
    "Web Development",
    "Data Science",
    "Mobile Development",
    "Programming Language",
    "Game Development",
  ];
  const arr2 = [
    "Entrepreneurship",
    "Communication",
    "Management",
    "Sales",
    "Business Strategy",
  ];
  const arr3 = [
    "Accounting & Bookkeeping",
    "Compliance",
    "Cryptocurrency & Blockchain",
    "Economics",
    "Finance",
  ];
  const arr4 = [
    "IT Certificate",
    "Network & Security",
    "Hardware",
    "Operating System",
    "IT & Software",
  ];
  const arr5 = ["Microsoft", "Apple", "Google", "SAP", "Oracle"];
  const arr6 = [
    "Personal Development",
    "Personal Transformation",
    "Personal Productivity",
    "Leadership",
    "Career Development",
  ];
  const arr7 = [
    "Digital Marketing",
    "Social Media Marketing",
    "Search Engine Optimization",
    "Branding",
    "Marketing Fundamentals",
  ];
  const arr8 = [
    "Fitness",
    "General Health",
    "Sports",
    "Nutrition Essentials",
    "Yoga",
  ];
  const arr9 = [
    "Instruments",
    "Music Production",
    "Music Fundamentals",
    "Vocal",
    "Music Techniques",
  ];
  console.log(open);
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <button className="hamburgerbutton" onClick={() => setOpen(!open)}>
              <RxHamburgerMenu />
            </button>
            <div className={open ? "mobileHamburger navbarOpen" : "hide"}>
              <div className="MobileNavbarContent">
                <div className="MobileNavbarContentData">
                  <ul>
                    <NavLink to="/login">
                      <li>
                        <a href="#">Login</a>
                      </li>
                    </NavLink>
                    <NavLink to="/register">
                      <li>
                        <a href="#">signup</a>
                      </li>
                    </NavLink>
                    <li>
                      <button onClick={() => setOpen(!open)}>"x"</button>
                    </li>
                  </ul>

                  <hr />

                  <ul className="MobilenavbarMainUl">
                    <NavLink to="/webdevelopment">
                      <li className="subData">
                        Web Development
                        <div className="MobilenavbarMainSubData">
                          <ul>
                            <li>sub data 1</li>
                          </ul>
                        </div>
                      </li>
                    </NavLink>
                    <NavLink to="//Business">
                      <li className="subData">
                        Business
                        <div className="MobilenavbarMainSubData">sub data</div>
                      </li>
                    </NavLink>
                    <NavLink to="/finance">
                      <li className="subData">
                        Finance & Accounting
                        <div className="MobilenavbarMainSubData">sub data</div>
                      </li>
                    </NavLink>
                    <NavLink to="/it">
                      <li className="subData">
                        IT & Software
                        <div className="MobilenavbarMainSubData">sub data</div>
                      </li>
                    </NavLink>
                    <NavLink to="/office">
                      <li className="subData">
                        Office Productivity
                        <div className="MobilenavbarMainSubData">sub data</div>
                      </li>
                    </NavLink>
                    <NavLink to="/personaldevelopment">
                      <li className="subData">
                        Personal Development
                        <div className="MobilenavbarMainSubData">sub data</div>
                      </li>
                    </NavLink>
                    <NavLink to="/marketing">
                      <li className="subData">
                        Marketing
                        <div className="MobilenavbarMainSubData">sub data</div>
                      </li>
                    </NavLink>
                    <NavLink to="/health">
                      <li className="subData">
                        Health & Fitness
                        <div className="MobilenavbarMainSubData">sub data</div>
                      </li>
                    </NavLink>
                    <NavLink to="/music">
                      <li className="subData">
                        Music
                        <div className="MobilenavbarMainSubData">sub data</div>
                      </li>
                    </NavLink>
                  </ul>
                </div>
              </div>
            </div>
            <NavLink to="/">
              <img
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                alt="udemy"
                width={"91"}
                height={"34"}
              />
            </NavLink>
            <div className="ParentCategories">
              <div className="categories">Categories</div>

              <div className="categoriesChildWrap">
                <ul className="categoriesChild">
                  <li className="categoriesChildContent">
                    <NavLink to="/webdevelopment"> Development</NavLink>
                    <span>
                      <IoIosArrowForward />
                    </span>
                    <ul className="categoriesGrandChildWrap">
                      {arr1.map((item, index) => {
                        return (
                          <NavLink to={`/subcategory/${item}`}>
                            <li key={index}>{item}</li>
                          </NavLink>
                        );
                      })}
                    </ul>
                  </li>

                  <li className="categoriesChildContent">
                    <NavLink to="/Business">
                      Business
                      <span>
                        <IoIosArrowForward />
                      </span>
                      <ul className="categoriesGrandChildWrap">
                        {arr2.map((item, index) => {
                          return (
                            <NavLink to={`/subcategory/${item}`}>
                              <li key={index}>{item}</li>
                            </NavLink>
                          );
                        })}
                      </ul>
                    </NavLink>
                  </li>
                  <li className="categoriesChildContent">
                    <NavLink to="/finance">
                      Finance & Accounting
                      <span>
                        <IoIosArrowForward />
                      </span>
                      <ul className="categoriesGrandChildWrap">
                        {arr3.map((item, index) => {
                          return (
                            <NavLink to={`/subcategory/${item}`}>
                              <li key={index}>{item}</li>
                            </NavLink>
                          );
                        })}
                      </ul>
                    </NavLink>
                  </li>
                  <li className="categoriesChildContent">
                    <NavLink to="/it">
                      IT & Software
                      <span>
                        <IoIosArrowForward />
                      </span>
                      <ul className="categoriesGrandChildWrap">
                        {arr4.map((item, index) => {
                          return (
                            <NavLink to={`/subcategory/${item}`}>
                              <li key={index}>{item}</li>
                            </NavLink>
                          );
                        })}
                      </ul>
                    </NavLink>
                  </li>
                  <li className="categoriesChildContent">
                    <NavLink to="/office">
                      Office Productivity
                      <span>
                        <IoIosArrowForward />
                      </span>
                      <ul className="categoriesGrandChildWrap">
                        {arr5.map((item, index) => {
                          return (
                            <NavLink to={`/subcategory/${item}`}>
                              <li key={index}>{item}</li>
                            </NavLink>
                          );
                        })}
                      </ul>
                    </NavLink>
                  </li>
                  <li className="categoriesChildContent">
                    <NavLink to="/personaldevelopment">
                      Personal Development
                      <span>
                        <IoIosArrowForward />
                      </span>
                      <ul className="categoriesGrandChildWrap">
                        {arr6.map((item, index) => {
                          return (
                            <NavLink to={`/subcategory/${item}`}>
                              <li key={index}>{item}</li>
                            </NavLink>
                          );
                        })}
                      </ul>
                    </NavLink>
                  </li>
                  <li className="categoriesChildContent">
                    <NavLink to="/marketing">
                      Marketing
                      <span>
                        <IoIosArrowForward />
                      </span>
                      <ul className="categoriesGrandChildWrap">
                        {arr7.map((item, index) => {
                          return (
                            <NavLink to={`/subcategory/${item}`}>
                              <li key={index}>{item}</li>
                            </NavLink>
                          );
                        })}
                      </ul>
                    </NavLink>
                  </li>
                  <li className="categoriesChildContent">
                    <NavLink to="/health">
                      Health & Fitness
                      <span>
                        <IoIosArrowForward />
                      </span>
                      <ul className="categoriesGrandChildWrap">
                        {arr8.map((item, index) => {
                          return (
                            <NavLink to={`/subcategory/${item}`}>
                              <li key={index}>{item}</li>
                            </NavLink>
                          );
                        })}
                      </ul>
                    </NavLink>
                  </li>
                  <li className="categoriesChildContent">
                    <NavLink to="/music">
                      Music
                      <span>
                        <IoIosArrowForward />
                      </span>
                      <ul className="categoriesGrandChildWrap">
                        {arr9.map((item, index) => {
                          return (
                            <NavLink to={`/subcategory/${item}`}>
                              <li key={index}>{item}</li>
                            </NavLink>
                          );
                        })}
                      </ul>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Searchbar">
              <input type="text" placeholder="Search for courses..." value="" />
            </div>
            <NavLink to="/techonUdemy">
              <div className="udemyTech">Tech</div>
            </NavLink>
            <NavLink to="/cart">
              <div className="AddToCart">
                <FaCartArrowDown />
              </div>
            </NavLink>
            <NavLink to="/login">
              <div className="Login">Login</div>
            </NavLink>
            <NavLink to="/register">
              <div className="Sign">SignUp</div>
            </NavLink>
            <div className="world">
              <TbWorld />
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/Business" element={<Business />}></Route>
        <Route path="/finance" element={<Finance />} />
        <Route path="/health" element={<Health />}></Route>
        <Route path="/it" element={<IT />}></Route>
        <Route path="/marketing" element={<Marketing />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/office" element={<Office />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/techonUdemy" element={<TechOnUdemy />}></Route>
        <Route path="/subcategory/:name" element={<SubCategories />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/personaldevelopment"
          element={<PersonalDevelopment />}
        ></Route>
      </Routes>
    </>
  );
};

export default Navbar;
