import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const TechOnUdemy = () => {
  return (
    <>
      <div className="HomeConatainer">
        <div className="Advertimsement1">
          <img
            className="AdvertimsementImg2"
            src="https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg"
            alt="not found"
          />
        </div>
        <div className="text">
          <div className="AdvertimsementText">Come teach with us</div>
          <span className="text2">
            Become an instructor and change lives — including your own
          </span>
          <button className="GetStarted">Get Started</button>
        </div>
      </div>

      <h1 className="TechWord">So many reasons to start</h1>
      <div className="Tech">
        <div className="tech1">
          <img
            className="phototech"
            src="https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg"
            alt="not found"
          />
          <h1>Teach your way</h1>
          <p>
            Publish the course you want, in the way you want, and always have
            control of your own content.
          </p>
        </div>
        <div className="tech1">
          <img
            className="phototech"
            src="https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg"
            alt="not found"
          />
          <h1>Inspire learners</h1>
          <p>
            Teach what you know and help learners explore their interests, gain
            new skills, and advance their careers.
          </p>
        </div>
        <div className="tech1">
          <img
            className="phototech"
            src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg"
            alt="not found"
          />
          <h1>Get rewarded</h1>
          <p>
            Expand your professional network, build your expertise, and earn
            money on each paid enrollment.
          </p>
        </div>
      </div>
      <div className="Mildstone">
        <div className="MildStone2">
          <h1>62M</h1>
          <h2>Students</h2>
        </div>
        <div className="MildStone2">
          <h1>75+</h1>
          <h2>Languages</h2>
        </div>
        <div className="MildStone2">
          <h1>830M</h1>
          <h2>Enrollment</h2>
        </div>
        <div className="MildStone2">
          <h1>180+</h1>
          <h2>Countries</h2>
        </div>
        <div className="MildStone2">
          <h1>150000+</h1>
          <h2>EnterPrise Customers</h2>
        </div>
      </div>
      <h1 className="begin">How to begin</h1>
      <div className="BeginNow">
        <h2>Plan your curriculum</h2>
        <h2>Record your viedo</h2>
        <h2>Launch your course</h2>
      </div>
      <div className="MainBegin">
        <div className="BeginTask">
          <p>
            You start with your passion and knowledge. Then choose a promising
            topic with the help of our Marketplace Insights tool. The way that
            you teach — what you bring to it — is up to you.
          </p>
          <h1>How we help you</h1>
          <p>
            We offer plenty of resources on how to create your first course.
            And, our instructor dashboard and curriculum pages help keep you
            organized.
          </p>
        </div>
        <div className="BeginTask1">
          <img
            className="studyimage"
            src="https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg"
            alt="not found"
          />
        </div>
      </div>
      <div className="TeachTeacher">
        <div className="TeacherImage">
          <img
            className="teacherstudyimage"
            src="https://s.udemycdn.com/teaching/instructors/en/frank-1x-v2.jpg"
            alt="not found"
          />
        </div>
        <div className="TeacherText">
          <p>
            “I’m proud to wake up knowing my work is helping people around the
            world improve their careers and build great things. While being a
            full-time instructor is hard work, it lets you work when, where, and
            how you want.”
          </p>
          <h1>Frank Smith</h1>
          <h2>Instructor at Udemy</h2>
        </div>
      </div>
      <div className="leftImageMainContainer">
        <div className="leftImage">
          <img
            className="leftimagefortechudemy"
            src="	https://s.udemycdn.com/teaching/support-1-v3.jpg"
            alt="not found"
          />
        </div>
        <div className="middleTextLast">
          <h1>You won’t have to do it alone</h1>
          <p className="our">
            Our Instructor Support Team is here to answer your questions and
            review your test video, while our Teaching Center gives you plenty
            of resources to help you through the process. Plus, get the support
            of experienced instructors in our online community.
          </p>
          <Link>Need more details before you start? Learn more.</Link>
        </div>
        <div className="rightimage">
          <img
            className="leftimagefortechudemy"
            src="https://s.udemycdn.com/teaching/support-2-v3.jpg"
            alt="not found"
          />
        </div>
      </div>
      <div className="InstructorTody">
        <div className="todaylast">
          <h1>Become an instructor today</h1>
          <h3>Join one of the world’s largest online learning marketplaces.</h3>
          <div>Get Started</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TechOnUdemy;
