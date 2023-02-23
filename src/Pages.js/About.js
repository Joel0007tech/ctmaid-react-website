import React from "react";
import Navbar from "./Nav";
import NewFooter from "./NewFooter";
import AboutImage from "./istockphoto-1130535812-612x612 1.png";
import "./About.css";
import { useMediaQuery } from "react-responsive";

function About() {
  const isDesktop = useMediaQuery({ query: "(min-width:428px)" });
  const isPhone = useMediaQuery({ query: "(max-width:428px)" });
  return (
    <div>
      <Navbar />
      <div className="aboutItems">
        <div>
          <h4>
            We are a team that believe in
            <br />
            Reducing, reusing, and
            <br />
            recycling.
          </h4>
          <p>
            Waste management is not a one-time effort, it's a continuous process
            <br />
            that requires the participation of everyone in the community to be
            <br />
            successful.
          </p>
          <p>
            By choosing to properly dispose of our waste, we can help protect
            the
            <br />
            health of our planet and ensure a cleaner, greener future for all.
          </p>
          <p>Ready to do this with us?</p>
          <a href="http://" className="aboutLink">
            Contact us today
          </a>
        </div>
        <img
          src={AboutImage}
          alt=""
          style={{
            width: "650px",
            height: "600px",
            position: "relative",
            left: "30px",
          }}
        />
      </div>
      <NewFooter />
    </div>
  );
}

export default About;
