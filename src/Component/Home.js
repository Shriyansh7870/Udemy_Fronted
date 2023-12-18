import React, { useState } from "react";
import "../CssComponent/Home.css";
import { FaPlayCircle } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
const Home = () => {
  const [data1, setData1] = useState();
  const [one, setOne] = useState();
  useEffect(() => {
    axios
      .get("https://udemy-backend-kutp.onrender.com/api/imagefind")
      .then((res) => {
        setData1(res.data);
      })

      .catch((err) => console.log(err, "error"));
  }, []);
  useEffect(() => {
    axios
      .get("https://udemy-backend-kutp.onrender.com/api/datafind")
      .then((res) => {
        setOne(res.data);
      })

      .catch((err) => console.log(err, "error"));
  }, []);

  return (
    <>
      <div className="HomeConatainer">
        <div className="Advertimsement">
          {data1 &&
            data1
              .filter((item) => item.id === 1)
              .map((item, index) => (
                <img
                  key={index}
                  className="AdvertisementImg"
                  src={item.image}
                  alt="not found"
                />
              ))}
          <div>
            <img
              className="AdvertisementImg"
              src="	https://img-c.udemycdn.com/notices/web_carousel_slide/image/4346883a-110a-41aa-9de2-197f260fdef1.jpg"
              alt="not found"
            />
          </div>
          <div className="text">
            <div className="AdvertimsementText">The skills you need</div>
            <span className="text2">
              Discover the courses that will help you get where you want to go.
            </span>
          </div>
        </div>
      </div>

      <div className="companyName">
        <div className="List">
          Trusted by over 15,000 companies and millions of learners around the
          world
        </div>
        <div className="imageList">
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg"
            alt="not found"
            width={"48px"}
            height={"48px"}
          />
          <img
            src="	https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg"
            alt="not found"
            width={"48px"}
            height={"48px"}
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg"
            alt="not found"
            width={"48px"}
            height={"48px"}
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg"
            alt="not found"
            width={"48px"}
            height={"48px"}
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg"
            alt="not found"
            width={"48px"}
            height={"48px"}
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg"
            alt="not found"
            width={"48px"}
            height={"48px"}
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg"
            alt="not found"
            width={"48px"}
            height={"48px"}
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg"
            alt="not found"
            width={"48px"}
            height={"48px"}
          />
        </div>
      </div>
      <div className="CourseList">
        <h1 className="coursetext">A broad selection of courses</h1>
        <div className="NumberOfCourse">
          Choose from over 210,000 online video courses with new additions
          published every month
        </div>
        <div className="listOfCourse">
          <button className="Course">
            <span>Python</span>
          </button>
          <button className="Course">
            <span>Excel</span>
          </button>
          <button className="Course">
            <span>Web Development</span>
          </button>
          <button className="Course">
            <span>JavaScript</span>
          </button>
          <button className="Course">
            <span>Data Science</span>
          </button>
          <button className="Course">
            <span>Amazon AWS</span>
          </button>
          <button className="Course">
            <span>Drawing</span>
          </button>
        </div>
      </div>
      <div className="ConatinerForCourse">
        <h3 className="ExpandYour">
          Expand your career opportunities with Python
        </h3>
        <p className="TakeYourCarrier">
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to...
        </p>
        <button className="Pythonbutton">Explore</button>
        <div className="MainContainer1">
          {one &&
            one
              .filter((item) => item.id >= 79 && item.id <= 100)
              .slice(0, 4)
              .map((item, index) => (
                <div className="child_container1 anotherchild" key={index}>
                  <div className="laptop_div">
                    <img
                      className="MainImage"
                      src={item.image}
                      alt="Not Found"
                    />
                  </div>
                  <div className="itemOFDescription">
                    {item.description.slice(0, 50)}
                  </div>
                  <div className="LaptopmodelName">{item.instructor}</div>
                  <div className="RatingofHome">{item.Rating}⭐⭐⭐⭐⭐</div>
                  <div className="Price-of-All">{item.price}</div>

                  <button
                    className="AddToCartButton"
                    // onClick={() => handleAddToCart(item.name)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
        </div>
      </div>

      <div className="commentContainer">
        <h1 className="comment">
          How learners like you are achieving their goals
        </h1>
        <div className="mulipleConatiner">
          <div className="comment1">
            <span>
              <img
                src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                alt="not found"
                width="24px"
                height="20px"
              />
            </span>
            <p style={{ color: "black" }}>
              I am proud to say that after a few months of taking this
              course...I passed my exam and am now an AWS Certified Cloud
              Practitioner! This content was exactly what the CCP exam covered.
            </p>
            <span className="namefirst">SK</span>
            <span style={{ color: "black", margin: "10px" }}>
              Shriyansh kumar
            </span>
            <p style={{ color: "blue" }}>
              <FaPlayCircle />{" "}
              <span style={{ color: "black" }}>
                [NEW] Ultimate AWS Certified Cloud Practitioner - 2022
              </span>
            </p>
          </div>
          <div className="comment1">
            <span>
              <img
                src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                alt="not found"
                width="24px"
                height="20px"
              />
            </span>
            <p style={{ color: "black" }}>
              I am proud to say that after a few months of taking this
              course...I passed my exam and am now an AWS Certified Cloud
              Practitioner! This content was exactly what the CCP exam covered.
            </p>
            <span className="namefirst">SK</span>
            <span style={{ color: "black", margin: "10px" }}>
              Shriyansh kumar
            </span>
            <p style={{ color: "blue" }}>
              <FaPlayCircle />{" "}
              <span style={{ color: "black" }}>
                [NEW] Ultimate AWS Certified Cloud Practitioner - 2022
              </span>
            </p>
          </div>
          <div className="comment1">
            <span>
              <img
                src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                alt="not found"
                width="24px"
                height="20px"
              />
            </span>
            <p style={{ color: "black" }}>
              I am proud to say that after a few months of taking this
              course...I passed my exam and am now an AWS Certified Cloud
              Practitioner! This content was exactly what the CCP exam covered.
            </p>
            <span className="namefirst">SK</span>
            <span style={{ color: "black", margin: "10px" }}>
              Shriyansh kumar
            </span>
            <p style={{ color: "blue" }}>
              <FaPlayCircle />{" "}
              <span style={{ color: "black" }}>
                [NEW] Ultimate AWS Certified Cloud Practitioner - 2022
              </span>
            </p>
          </div>
          <div className="comment1">
            <span>
              <img
                src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                alt="not found"
                width="24px"
                height="20px"
              />
            </span>
            <p style={{ color: "black" }}>
              I am proud to say that after a few months of taking this
              course...I passed my exam and am now an AWS Certified Cloud
              Practitioner! This content was exactly what the CCP exam covered.
            </p>
            <span className="namefirst">SK</span>
            <span style={{ color: "black", margin: "10px" }}>
              Shriyansh kumar
            </span>
            <p style={{ color: "blue" }}>
              <FaPlayCircle />{" "}
              <span style={{ color: "black" }}>
                [NEW] Ultimate AWS Certified Cloud Practitioner - 2022
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="LearningHead">Learners are viewing</div>
      <div className="LearningContainer">
        <div className="learningContent">
          {one &&
            one
              .filter((item) => item.id >= 150 && item.id <= 200)
              .slice(0, 5)
              .map((item, index) => (
                <div className="AnotherOneChild" key={index}>
                  <div className="laptop_div">
                    <img
                      className="MainImage subImage2"
                      src={item.image}
                      alt="Not Found"
                    />
                  </div>
                  <div className="itemOFDescription">
                    {item.description.slice(0, 50)}
                  </div>
                  <div className="LaptopmodelName">{item.instructor}</div>
                  <div className="RatingofHome">{item.Rating}⭐⭐⭐⭐⭐</div>
                  <div className="Price-of-All">{item.price}</div>

                  <button
                    className="AddToCartButton"
                    // onClick={() => handleAddToCart(item.name)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
        </div>
      </div>

      <div className="Topcategories">
        <h1 className="categroies">Top categories</h1>
        <div className="CategoriesConatiner">
          <div className="conatiner1">
            <img
              className="first"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
              alt="not found"
            />
            <p style={{ color: "black" }}>design</p>
          </div>
          <div className="conatiner1">
            <img
              className="first"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
              alt="not found"
            />
            <p style={{ color: "black" }}>Development</p>
          </div>
          <div className="conatiner1">
            <img
              className="first"
              src="	https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"
              alt="not found"
            />
            <p style={{ color: "black" }}>Marketing</p>
          </div>
          <div className="conatiner1">
            <img
              className="first"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg"
              alt="not found"
            />
            <p style={{ color: "black" }}>IT and Software</p>
          </div>
          <div className="conatiner1">
            <img
              className="first"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"
              alt="not found"
            />
            <p style={{ color: "black" }}>Personal Development</p>
          </div>
          <div className="conatiner1">
            <img
              className="first"
              src="	https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"
              alt="not found"
            />
            <p style={{ color: "black" }}>Business</p>
          </div>
          <div className="conatiner1">
            <img
              className="first"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"
              alt="not found"
            />
            <p style={{ color: "black" }}>Photography</p>
          </div>
          <div className="conatiner1">
            <img
              className="first"
              src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"
              alt="not found"
            />
            <p style={{ color: "black" }}>Music</p>
          </div>
        </div>
      </div>
      <div className="Featuredcategory">
        <div className="LearningHead">Featured topics by category</div>
        <div className="LearningmainConatiner">
          <div className="conatiner1Learning">
            <h1>Development</h1>
            <p>Python</p>
            <div>455454797</div>
            <p>Web Development</p>
            <div>455454797</div>
            <p>Machine Learning</p>
            <div>455454797</div>
          </div>
          <div className="conatiner1Learning">
            <h1>Business</h1>
            <p>Financial Analysis</p>
            <div>455454797</div>
            <p>SQL</p>
            <div>455454797</div>
            <p>PMP</p>
            <div>455454797</div>
          </div>
          <div className="conatiner1Learning">
            <h1>IT And Software</h1>
            <p>Amazon AWS</p>
            <div>455454797</div>
            <p>Ethical Hacking</p>
            <div>455454797</div>
            <p>Cyber Security</p>
            <div>455454797</div>
          </div>
          <div className="conatiner1Learning">
            <h1>Design</h1>
            <p>Photography</p>
            <div>455454797</div>
            <p>Graphic Design</p>
            <div>455454797</div>
            <p>Drawing</p>
            <div>455454797</div>
          </div>
        </div>
      </div>
      <button className="Explore">Explore More</button>
      <div className="AnotherAdvertisment">
        <div className="Advertisment2">
          <div className="firstoneadvertisment">
            <img
              className="udemyimageAll"
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
              alt="not found"
              width="192px"
              height="132px"
            />
            <h3>Upskill your team with Udemy Business</h3>
            <li>
              <span>
                Unlimited access to 25,000+ top Udemy courses, anytime, anywhere
              </span>
            </li>
            <li>
              <span>International course collection in 14 languages</span>
            </li>
            <li>
              <span>Top certifications in tech and business</span>
            </li>
            <div className="Multiplebutton">
              <button className="makingbutton">Get Udemy Business</button>
              <button className="makingbutton">Learn More</button>
            </div>
          </div>
          <div className="anotheradver">
            <img
              className="firstoneadvertisment2"
              src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg"
              alt="not found"
            />
          </div>
        </div>
      </div>
      <div className="Review">
        <div className="Review1">
          <div className="textReview">
            <img
              src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
              width="20px"
              height="20px"
              alt="not found"
            />
            <h3 className="textforBusiness">
              Thanks to Udemy Business, Booz Allen has armed our workforce,
              specifically its data scientists, with highly relevant and
              in-demand tech skills that are enabling consultants to stay ahead
              of big data trends and raise the bar on proficiency, skills, and
              competencies to meet client demand.
            </h3>
            <h2>Read Full Story</h2>
          </div>
          <div className="HIIINCOME">
            <img
              className="ReviewImg"
              src="https://s.udemycdn.com/home/ub-case-studies/James_Hemgen.jpeg"
              height="200px"
              width="200px"
              alt="not found"
            />
            <div className="nameReviewforHome">
              <h1>Jim Hemgen</h1>
              <p>Principal</p>
              <p>Booz Allen Hamilton</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Teacher">
        <div className="TeacherConatiner">
          <div className="Teacherimg">
            <img
              src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
              alt="not found"
            />
          </div>
          <div className="TeacherText">
            <h1 className="BecomeA">Become an instructor</h1>
            <p className="instructorforTeacher">
              Instructors from around the world teach millions of learners on
              Udemy. We provide the tools and skills to teach what you love.
            </p>
            <button className="Teaching" type="submit">
              start Teaching Today
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
