import React from "react";
import Navbar from "./Nav";
import NewFooter from "./NewFooter";
import AboutImage from "./istockphoto-1130535812-612x612 1.png";
import "./About.css";
import { useMediaQuery } from "react-responsive";

function About() {
  const desktopContent = useMediaQuery({ query: "(min-width:429px)" });
  const phoneContent = useMediaQuery({ query: "(max-width:428px)" });
  return (
    <div>
      {desktopContent && <Navbar />}
      {desktopContent && (
        <div className="aboutItems">
          <div>
            {desktopContent && (
              <h4>
                We are a team that believe in
                <br />
                Reducing, reusing, and
                <br />
                recycling.
              </h4>
            )}

            {desktopContent && (
              <p>
                Waste management is not a one-time effort, it's a continuous
                process
                <br />
                that requires the participation of everyone in the community to
                be
                <br />
                successful.
              </p>
            )}

            {desktopContent && (
              <p>
                By choosing to properly dispose of our waste, we can help
                protect the
                <br />
                health of our planet and ensure a cleaner, greener future for
                all.
              </p>
            )}

            {desktopContent && <p>Ready to do this with us?</p>}
            {desktopContent && (
              <a href="http://" className="aboutLink">
                Contact us today
              </a>
            )}
          </div>
          {desktopContent && (
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
          )}
        </div>
      )}
      {phoneContent && (
        <div className="aboutMobile">
          {phoneContent && (
            <h4>
              As a team, our goal is
              <br />
              to reduce, recycle and <br />
              reuse waste
            </h4>
          )}
          {phoneContent && (
            <p>
              Ctmaid is an environmental service company
              <br />
              incorporated in 2014 and based in Ile-Ife,
              <br />
              Osun state.We provide environmental
              <br />
              services in the following areas: waste
              <br />
              disposal, waste recycling, fumigation and
              <br />
              corporate cleaning to individuals and
              <br />
              corporate organizations.
            </p>
          )}
          {phoneContent && (
            <p>
              Waste management is not a one-time effort,
              <br />
              it's a continuous process that requires the
              <br />
              participation of everyone in the community to
              <br />
              be successful
            </p>
          )}
          {phoneContent && (
            <p>
              By choosing to properly dispose your waste,
              <br />
              we can help protect the health of our planet
              <br />
              and ensure a cleaner, greener future for all.
              <br /> Ready to do this with us ?{" "}
            </p>
          )}
          {phoneContent && <a href="http://">Contact us today</a>}
          {phoneContent && (
            <img
              src={AboutImage}
              alt=""
              style={{
                width: "450px",
                height: "500px",
              }}
            />
          )}
        </div>
      )}
      <NewFooter />
    </div>
  );
}

export default About;
