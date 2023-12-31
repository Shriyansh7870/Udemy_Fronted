import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
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
import Cart from "../Component/cart";
import Learning from "./Learnig";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import Search from "./Search";
import Engineering from "../MultipleComponent/Engineering";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loginstate, setLoginState] = useState("");
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [cartItems, setCartItems] = useState();

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
  const arr10 = [
    "Programming Language",
    "Apple",
    "Communication",
    "Economics",
    "IT Certificate",
  ];
  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload(true);
  };
  const HandleChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };
  useEffect(() => {
    try {
      axios
        .get(` http://localhost:4000/api/searchdata?type=${query}`)
        .then((res) => setResults(res.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [query]);
  useEffect(() => {
    axios
      .get("https://udemy-backend-kutp.onrender.com/api/getaddCart")
      .then((res) => {
        const length = res.data.length;
        setCartItems(length);
      })
      .catch((err) => console.error(err));
  }, [cartItems]);
  useEffect(() => {
    const nameDescription = localStorage.getItem("name");
    setLoginState(nameDescription);
  }, []);
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <button className="hamburgerbutton2" onClick={() => setOpen(!open)}>
              <RxHamburgerMenu />
            </button>
            <div className={open ? "mobileHamburger navbarOpen" : "hide"}>
              <div className="MobileNavbarContent">
                <div className="MobileNavbarContentData">
                  <ul>
                    <NavLink to="/login">
                      <li>
                        <div>Login</div>
                      </li>
                    </NavLink>
                    <NavLink to="/register">
                      <li>
                        <div>signup</div>
                      </li>
                    </NavLink>
                    <li>
                      <button
                        className="crossbutton"
                        onClick={() => setOpen(!open)}
                      >
                        x
                      </button>
                    </li>
                  </ul>

                  <hr />

                  <ul className="MobilenavbarMainUl">
                    <NavLink
                      to="/webdevelopment"
                      onClick={() => setOpen(!open)}
                    >
                      <li className="">
                        Web Development
                        <ul className="">
                          {arr1.map((item, index) => {
                            return (
                              <NavLink
                                to={`/subcategory/${item}`}
                                onClick={() => setOpen(!open)}
                              >
                                <li key={index}>{item}</li>
                              </NavLink>
                            );
                          })}
                        </ul>
                      </li>
                    </NavLink>
                    <NavLink to="/Business" onClick={() => setOpen(!open)}>
                      <li className="">
                        Business
                        <ul className="">
                          {arr2.map((item, index) => {
                            return (
                              <NavLink
                                to={`/subcategory/${item}`}
                                onClick={() => setOpen(!open)}
                              >
                                <li key={index}>{item}</li>
                              </NavLink>
                            );
                          })}
                        </ul>
                      </li>
                    </NavLink>
                    <NavLink to="/finance" onClick={() => setOpen(!open)}>
                      <li className="">
                        Finance & Accounting
                        <ul className="">
                          {arr3.map((item, index) => {
                            return (
                              <NavLink
                                to={`/subcategory/${item}`}
                                onClick={() => setOpen(!open)}
                              >
                                <li key={index}>{item}</li>
                              </NavLink>
                            );
                          })}
                        </ul>
                      </li>
                    </NavLink>
                    <NavLink to="/it" onClick={() => setOpen(!open)}>
                      <li className="">
                        IT & Software
                        <ul className="">
                          {arr4.map((item, index) => {
                            return (
                              <NavLink
                                to={`/subcategory/${item}`}
                                onClick={() => setOpen(!open)}
                              >
                                <li key={index}>{item}</li>
                              </NavLink>
                            );
                          })}
                        </ul>
                      </li>
                    </NavLink>
                    <NavLink to="/office" onClick={() => setOpen(!open)}>
                      <li className="">
                        Office Productivity
                        <ul className="">
                          {arr5.map((item, index) => {
                            return (
                              <NavLink
                                to={`/subcategory/${item}`}
                                onClick={() => setOpen(!open)}
                              >
                                <li key={index}>{item}</li>
                              </NavLink>
                            );
                          })}
                        </ul>
                      </li>
                    </NavLink>
                    <NavLink
                      to="/personaldevelopment"
                      onClick={() => setOpen(!open)}
                    >
                      <li className="">
                        Personal Development
                        <ul className="">
                          {arr6.map((item, index) => {
                            return (
                              <NavLink
                                to={`/subcategory/${item}`}
                                onClick={() => setOpen(!open)}
                              >
                                <li key={index}>{item}</li>
                              </NavLink>
                            );
                          })}
                        </ul>
                      </li>
                    </NavLink>
                    <NavLink to="/marketing" onClick={() => setOpen(!open)}>
                      <li className="">
                        Marketing
                        <ul className="">
                          {arr7.map((item, index) => {
                            return (
                              <NavLink
                                to={`/subcategory/${item}`}
                                onClick={() => setOpen(!open)}
                              >
                                <li key={index}>{item}</li>
                              </NavLink>
                            );
                          })}
                        </ul>
                      </li>
                    </NavLink>
                    <NavLink to="/health" onClick={() => setOpen(!open)}>
                      <li className="">
                        Health & Fitness
                        <ul className="">
                          {arr8.map((item, index) => {
                            return (
                              <NavLink
                                to={`/subcategory/${item}`}
                                onClick={() => setOpen(!open)}
                              >
                                <li key={index}>{item}</li>
                              </NavLink>
                            );
                          })}
                        </ul>
                      </li>
                    </NavLink>
                    <NavLink to="/music" onClick={() => setOpen(!open)}>
                      <li className="">
                        Music
                        <ul className="">
                          {arr9.map((item, index) => {
                            return (
                              <NavLink
                                to={`/subcategory/${item}`}
                                onClick={() => setOpen(!open)}
                              >
                                <li key={index}>{item}</li>
                              </NavLink>
                            );
                          })}
                        </ul>
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
                    <NavLink
                      to="/webdevelopment"
                      onClick={() => setOpen(!open)}
                    >
                      {" "}
                      Development
                    </NavLink>
                    <span>
                      <IoIosArrowForward />
                    </span>
                    <ul className="categoriesGrandChildWrap">
                      {arr1.map((item, index) => {
                        return (
                          <NavLink
                            to={`/subcategory/${item}`}
                            onClick={() => setOpen(!open)}
                          >
                            <li key={index}>{item}</li>
                          </NavLink>
                        );
                      })}
                    </ul>
                  </li>

                  <li className="categoriesChildContent">
                    <NavLink to="/Business" onClick={() => setOpen(!open)}>
                      Business
                      <span>
                        <IoIosArrowForward />
                      </span>
                      <ul className="categoriesGrandChildWrap">
                        {arr2.map((item, index) => {
                          return (
                            <NavLink
                              to={`/subcategory/${item}`}
                              onClick={() => setOpen(!open)}
                            >
                              <li key={index}>{item}</li>
                            </NavLink>
                          );
                        })}
                      </ul>
                    </NavLink>
                  </li>
                  <li className="categoriesChildContent">
                    <NavLink to="/finance" onClick={() => setOpen(!open)}>
                      Finance & Accounting
                      <span>
                        <IoIosArrowForward />
                      </span>
                      <ul className="categoriesGrandChildWrap">
                        {arr3.map((item, index) => {
                          return (
                            <NavLink
                              to={`/subcategory/${item}`}
                              onClick={() => setOpen(!open)}
                            >
                              <li key={index}>{item}</li>
                            </NavLink>
                          );
                        })}
                      </ul>
                    </NavLink>
                  </li>
                  <li className="categoriesChildContent">
                    <NavLink to="/it" onClick={() => setOpen(!open)}>
                      IT & Software
                      <span>
                        <IoIosArrowForward />
                      </span>
                      <ul className="categoriesGrandChildWrap">
                        {arr4.map((item, index) => {
                          return (
                            <NavLink
                              to={`/subcategory/${item}`}
                              onClick={() => setOpen(!open)}
                            >
                              <li key={index}>{item}</li>
                            </NavLink>
                          );
                        })}
                      </ul>
                    </NavLink>
                  </li>
                  <li className="categoriesChildContent">
                    <NavLink to="/office" onClick={() => setOpen(!open)}>
                      Office Productivity
                      <span>
                        <IoIosArrowForward />
                      </span>
                      <ul className="categoriesGrandChildWrap">
                        {arr5.map((item, index) => {
                          return (
                            <NavLink
                              to={`/subcategory/${item}`}
                              onClick={() => setOpen(!open)}
                            >
                              <li key={index}>{item}</li>
                            </NavLink>
                          );
                        })}
                      </ul>
                    </NavLink>
                  </li>
                  <li className="categoriesChildContent">
                    <NavLink
                      to="/personaldevelopment"
                      onClick={() => setOpen(!open)}
                    >
                      Personal Development
                      <span>
                        <IoIosArrowForward />
                      </span>
                      <ul className="categoriesGrandChildWrap">
                        {arr6.map((item, index) => {
                          return (
                            <NavLink
                              to={`/subcategory/${item}`}
                              onClick={() => setOpen(!open)}
                            >
                              <li key={index}>{item}</li>
                            </NavLink>
                          );
                        })}
                      </ul>
                    </NavLink>
                  </li>
                  <li className="categoriesChildContent">
                    <NavLink to="/marketing" onClick={() => setOpen(!open)}>
                      Marketing
                      <span>
                        <IoIosArrowForward />
                      </span>
                      <ul className="categoriesGrandChildWrap">
                        {arr7.map((item, index) => {
                          return (
                            <NavLink
                              to={`/subcategory/${item}`}
                              onClick={() => setOpen(!open)}
                            >
                              <li key={index}>{item}</li>
                            </NavLink>
                          );
                        })}
                      </ul>
                    </NavLink>
                  </li>
                  <li className="categoriesChildContent">
                    <NavLink to="/health" onClick={() => setOpen(!open)}>
                      Health & Fitness
                      <span>
                        <IoIosArrowForward />
                      </span>
                      <ul className="categoriesGrandChildWrap">
                        {arr8.map((item, index) => {
                          return (
                            <NavLink
                              to={`/subcategory/${item}`}
                              onClick={() => setOpen(!open)}
                            >
                              <li key={index}>{item}</li>
                            </NavLink>
                          );
                        })}
                      </ul>
                    </NavLink>
                  </li>
                  <li className="categoriesChildContent">
                    <NavLink to="/music" onClick={() => setOpen(!open)}>
                      Music
                      <span>
                        <IoIosArrowForward />
                      </span>
                      <ul className="categoriesGrandChildWrap">
                        {arr9.map((item, index) => {
                          return (
                            <NavLink
                              to={`/subcategory/${item}`}
                              onClick={() => setOpen(!open)}
                            >
                              <li key={index}>{item}</li>
                            </NavLink>
                          );
                        })}
                      </ul>
                    </NavLink>
                  </li>
                  <li className="categoriesChildContent">
                    <NavLink to="/Engineering" onClick={() => setOpen(!open)}>
                      Engineering
                      <span>
                        <IoIosArrowForward />
                      </span>
                      <ul className="categoriesGrandChildWrap">
                        {arr10.map((item, index) => {
                          return (
                            <NavLink
                              to={`/subcategory/${item}`}
                              onClick={() => setOpen(!open)}
                            >
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
              <input
                type="text"
                placeholder="Search for courses..."
                value={query}
                onChange={HandleChange}
              />
              <NavLink to="/search" state={results}>
                <IoSearchOutline className="searchicon" />
              </NavLink>
            </div>
            <NavLink to="/techonUdemy">
              <div className="udemyTech">Tech</div>
            </NavLink>
            <NavLink to="/cart">
              <div className="AddToCart">
                <FaCartArrowDown />
                <div className="cartitemnumber">{cartItems}</div>
              </div>
            </NavLink>

            <div className="world">
              <TbWorld />
            </div>
            {loginstate ? (
              <div className="HiiOne">
                <div className="UserLogo">{loginstate.slice(0, 1)}</div>
                <div className="outlineDescription">
                  <div className="UserDescription">
                    <NavLink to="/cart">
                      <p>Cart</p>
                    </NavLink>
                    <NavLink to="/learning">
                      <p>MyLearning</p>
                    </NavLink>
                    <button className="logoutbutton" onClick={handleLogOut}>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="userCreditals">
                <NavLink to="/login">
                  <div className="Login">Login</div>
                </NavLink>
                <NavLink to="/register">
                  <div className="Sign">SignUp</div>
                </NavLink>
              </div>
            )}
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
        <Route path="/learning" element={<Learning />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/Engineering" element={<Engineering />}></Route>
        <Route
          path="/personaldevelopment"
          element={<PersonalDevelopment />}
        ></Route>
      </Routes>
    </>
  );
};

export default Navbar;
