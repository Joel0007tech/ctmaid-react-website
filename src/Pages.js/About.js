import React from "react";
import Navbar from "./Nav";
import NewFooter from "./NewFooter";
import AboutImage from "./istockphoto-1130535812-612x612 1.png";
import "./About.css";

const AboutItems = {
  display: "flex",
  padding: "10%",
  backgroundColor: "whitesmoke",
};
const AboutHeadng = {
  fontFamily: "Hanken Grotesk,sans-serif",
  fontSize: "30px",
  fontWeight: "900",
};
const AboutParagraph = {
  fontFamily: "Hanken Grotesk,sans-serif",
  fontSize: "18px",
  marginTop: "10%",
  fontWeight: "700",
  lineHeight: "25px",
  color: "gray",
};
const AboutLink = {
  padding: "15px",
  textAlign: "center",
  backgroundColor: "steelblue",
  fontFamily: "Hanken Grotesk,sans-serif",
  paddingLeft: "85px",
  paddingRight: "85px",
  color: "white",
  textDecoration: "none",
  position: "relative",
  top: "80px",
  borderRadius: "7px",
  fontWeight: "700",
  fontSize: "16px",
};

function About() {
  return (
    <div>
      <Navbar />
      <div style={AboutItems}>
        <div>
          <h4 style={AboutHeadng}>
            We are a team that believe in
            <br />
            Reducing, reusing, and
            <br />
            recycling.
          </h4>
          <p style={AboutParagraph}>
            Waste management is not a one-time effort, it's a continuous process
            <br />
            that requires the participation of everyone in the community to be
            <br />
            successful.
          </p>
          <p style={AboutParagraph}>
            By choosing to properly dispose of our waste, we can help protect
            the
            <br />
            health of our planet and ensure a cleaner, greener future for all.
          </p>
          <p style={AboutParagraph}>Ready to do this with us?</p>
          <a href="http://" style={AboutLink}>
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
