import React from "react";
import Navbar from "./Nav";
import NewFooter from "./NewFooter";
import FirstContactImage from "./sol_2-1fbb264d.svg";
import SecondContactImage from "./istockphoto-1130535812-612x612 1.png";
import "./Contact.css";
import { useMediaQuery } from "react-responsive";

function Contact() {
  const isDesktop = useMediaQuery({ query: "(min-width:765px)" });
  const isPhone = useMediaQuery({ query: "(max-width:428px)" });
  return (
    <div>
      <Navbar />
      <div className="contactItems">
        <div className="firstContactitems">
          {isDesktop && <h3>Contact Us</h3>}
          {isPhone && <h4>hello</h4>}
          <img
            src={FirstContactImage}
            alt=""
            style={{ position: "relative", top: "5px", right: "14%" }}
          />
          <h2>We’d love to hear from you</h2>
          <p>We have offices and teams all over the world</p>
        </div>
        <div className="supportCustomer">
          <div>
            <h3>Support</h3>
            <p>Our friendly team is here to help</p>
            <a href="http://" className="supportLink">
              ctmaidsynergy@gmail.com
            </a>
          </div>
          <div>
            <h3 className="customerCareheading">Customer care line</h3>
            <p className="customerCareparagraph">Mon to Fri, 8am - 4pm</p>
            <a href="http://" className="customerCarenumber">
              09154178776
            </a>
          </div>
        </div>
        <div className="whatsappAddressfacebook">
          <div className="whatsapp">
            <h3>Whatsapp</h3>
            <p>08053678503</p>
          </div>
          <div className="address">
            <h3>Address</h3>
            <p>Address: 49, Ojaja Line 2, Fajuyi road, Ile-ife.</p>
          </div>
          <div className="facebook">
            <h3>Facebook</h3>
            <p>Ctmaid Synergy Ltd</p>
          </div>
        </div>
        <div className="contactImage">
          <img
            src={SecondContactImage}
            alt=""
            style={{ display: "block", margin: " 0 auto" }}
          />
        </div>
      </div>
      <NewFooter />
    </div>
  );
}

export default Contact;
