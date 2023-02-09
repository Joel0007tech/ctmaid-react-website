import React from "react";
import Navbar from "./Nav";
import NewFooter from "./NewFooter";
import FirstContactImage from "./istockphoto-1130535812-612x612 2.png";
import SecondContactImage from "./istockphoto-1130535812-612x612 1.png";

const ContactItems = {
  backgroundColor: "whitesmoke",
  paddingTop: "7%",
};
const FirstContactItems = {
  textAlign: "center",
};
const contactHeading = {
  fontFamily: "Hanken Grotesk,sans-serif",
  color: "orange",
  paddingTop: "1%",
};
const SecondHeading = {
  fontFamily: "Hanken Grotesk,sans-serif",
  fontSize: "30px",
  fontWeight: "800",
  position: "relative",
  bottom: "50px",
};
const FirstParagraph = {
  fontFamily: "Hanken Grotesk,sans-serif",
  fontSize: "16px",
  position: "relative",
  bottom: "40px",
  fontWeight: "500",
};
const SupportCustomer = {
  paddingTop: "3%",
  display: "flex",
  justifyContent: "center",
  gap: "10px",
};
const SupportHeading = {
  fontFamily: "Hanken Grotesk,sans-serif",
  fontWeight: "500",
  color: " rgb(70, 68, 68)",
};
const SupportParagraph = {
  fontFamily: "Hanken Grotesk,sans-serif",
  position: "relative",
  right: "90px",
  fontSize: "16px",
  color: "gray",
  fontWeight: "700",
};
const SupportLink = {
  fontFamily: "Hanken Grotesk,sans-serif",
  position: "relative",
  right: "60px",
  color: "steelblue",
  fontWeight: "700",
  fontSize: "13px",
};
const CustomerCareHeading = {
  fontFamily: "Hanken Grotesk,sans-serif",
  fontWeight: "700",
  color: " rgb(70, 68, 68)",
};
const CustomerCareParagraph = {
  fontFamily: "Hanken Grotesk,sans-serif",
  fontSize: "16px",
  color: "gray",
  fontWeight: "700",
};
const CustomerCareNumber = {
  fontFamily: "Hanken Grotesk,sans-serif",
  textDecoration: "none",
  color: "steelblue",
  fontWeight: "600",
  position: "relative",
  left: "2px",
};
const WhatsappAddressFacebook = {
  display: "flex",
  justifyContent: "space-evenly",
  paddingTop: "10%",
};
const Whatsapp = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};
const WhatsappHeading = {
  fontFamily: "Hanken Grotesk,sans-serif",
  fontSize: "18px",
  color: "rgb(70, 68, 68)",
};
const WhatsappParagraph = {
  fontFamily: "Hanken Grotesk,sans-serif",
  fontSize: "13px",
  fontWeight: "700",
  color: "steelblue",
};
const Address = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};
const AddressHeading = {
  fontFamily: "Hanken Grotesk,sans-serif",
  fontSize: "18px",
  color: "rgb(70, 68, 68)",
};
const AddressParagraph = {
  fontFamily: "Hanken Grotesk,sans-serif",
  fontSize: "13px",
  fontWeight: "700",
  color: "gray",
  position: "relative",
  right: "85px",
};
const Facebook = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};
const FacebookHeading = {
  fontFamily: "Hanken Grotesk,sans-serif",
  fontSize: "18px",
  color: "rgb(70, 68, 68)",
};
const FacebookParagraph = {
  fontFamily: "Hanken Grotesk,sans-serif",
  fontSize: "13px",
  fontWeight: "700",
  color: "gray",
  position: "relative",
  right: "20px",
};
const ContactImage = {
  width: "100%",
  backgroundColor: "rgb(194, 226, 252)",
  marginTop: "7%",
};

function Contact() {
  return (
    <div>
      <Navbar />
      <div style={ContactItems}>
        <div style={FirstContactItems}>
          <h3 style={contactHeading}>Contact Us</h3>
          <img
            src={FirstContactImage}
            alt=""
            style={{ position: "relative", top: "5px", right: "14%" }}
          />
          <h2 style={SecondHeading}>We’d love to hear from you</h2>
          <p style={FirstParagraph}>
            We have offices and teams all over the world
          </p>
        </div>
        <div style={SupportCustomer}>
          <div>
            <h3 style={SupportHeading}>Support</h3>
            <p style={SupportParagraph}>Our friendly team is here to help</p>
            <a href="http://" style={SupportLink}>
              ctmaidsynergy@gmail.com
            </a>
          </div>
          <div>
            <h3 style={CustomerCareHeading}>Customer care line</h3>
            <p style={CustomerCareParagraph}>Mon to Fri, 8am - 4pm</p>
            <a href="http://" style={CustomerCareNumber}>
              09154178776
            </a>
          </div>
        </div>
        <div style={WhatsappAddressFacebook}>
          <div style={Whatsapp}>
            <h3 style={WhatsappHeading}>Whatsapp</h3>
            <p style={WhatsappParagraph}>08053678503</p>
          </div>
          <div style={Address}>
            <h3 style={AddressHeading}>Address</h3>
            <p style={AddressParagraph}>
              Address: 49, Ojaja Line 2, Fajuyi road, Ile-ife.
            </p>
          </div>
          <div style={Facebook}>
            <h3 style={FacebookHeading}>Facebook</h3>
            <p style={FacebookParagraph}>Ctmaid Synergy Ltd</p>
          </div>
        </div>
        <div style={ContactImage}>
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
