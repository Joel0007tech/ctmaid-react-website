import React from "react";
import Logo from "./ctmaid 1.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./Mobilenav.css"

const Heading = {
  height: "70px",
};
const NavStyling = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  padding: "1%",
  gap: "100px",
};

const LogoStyling = {
  position: "relative",
  bottom: "15px",
  right: "5%",
};

const ListStyling = {
  listStyle: "none",
  display: "flex",
  gap: "90px",
  position: "relative",
  left: "30px",
};

const LinkStyling = {
  fontFamily: "Hanken Grotesk, sans-serif",
  textDecoration: "none",
  fontWeight: "600",
  color: "black",
  fontSize: "18px",
};

const ContactStyling = {
  fontFamily: "Hanken Grotesk, sans-serif",
  textDecoration: "none",
  fontWeight: "500",
  padding: "10px",
  backgroundColor: "steelblue",
  color: "white",
  paddingLeft: "55px",
  paddingRight: "55px",
  textAlign: "center",
  borderRadius: "10px",
};

function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


function MouseOver() {
  document.getElementById("home").style.border = "3px solid orange";
  document.getElementById("home").style.paddingTop = "10px";
  document.getElementById("home").style.paddingBottom = "10px";
  document.getElementById("home").style.borderTop = "none";
  document.getElementById("home").style.borderRight = "none";
  document.getElementById("home").style.borderLeft = "none";
}

function MouseLeave() {
  document.getElementById("home").style.border = null;
  document.getElementById("home").style.paddingTop = null;
  document.getElementById("home").style.paddingBottom = null;
  document.getElementById("home").style.borderTop = null;
  document.getElementById("home").style.borderRight = null;
  document.getElementById("home").style.borderLeft = null;
}

function MouseOverBlog() {
  document.getElementById("blog").style.border = "3px solid orange";
  document.getElementById("blog").style.paddingTop = "10px";
  document.getElementById("blog").style.paddingBottom = "10px";
  document.getElementById("blog").style.borderTop = "none";
  document.getElementById("blog").style.borderRight = "none";
  document.getElementById("blog").style.borderLeft = "none";
}

function MouseLeaveBlog() {
  document.getElementById("blog").style.border = null;
  document.getElementById("blog").style.paddingTop = null;
  document.getElementById("blog").style.paddingBottom = null;
  document.getElementById("blog").style.borderTop = null;
  document.getElementById("blog").style.borderRight = null;
  document.getElementById("blog").style.borderLeft = null;
}

function MouseOverAbout() {
  document.getElementById("about").style.border = "3px solid orange";
  document.getElementById("about").style.paddingTop = "10px";
  document.getElementById("about").style.paddingBottom = "10px";
  document.getElementById("about").style.borderTop = "none";
  document.getElementById("about").style.borderRight = "none";
  document.getElementById("about").style.borderLeft = "none";
}

function MouseLeaveAbout() {
  document.getElementById("about").style.border = null;
  document.getElementById("about").style.paddingTop = null;
  document.getElementById("about").style.paddingBottom = null;
  document.getElementById("about").style.borderTop = null;
  document.getElementById("about").style.borderRight = null;
  document.getElementById("about").style.borderLeft = null;
}

function Navbar() {
  const desktopContent = useMediaQuery({ query: "(min-width:429px)" });
  const phoneContent = useMediaQuery({query:'(max-width:428px)'})
  return (
    <div>
     {desktopContent && <div>
        <header style={Heading}>
          <nav style={NavStyling}>
            <img src={Logo} alt="" style={LogoStyling} />
            <ul style={ListStyling}>
              <li>
                <Link
                  style={LinkStyling}
                  to="/"
                  id="home"
                  onMouseOver={MouseOver}
                  onMouseLeave={MouseLeave}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  style={LinkStyling}
                  to="blogs"
                  target="_blank"
                  id="blog"
                  onMouseOver={MouseOverBlog}
                  onMouseLeave={MouseLeaveBlog}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  style={LinkStyling}
                  to="about"
                  target="_blank"
                  id="about"
                  onMouseOver={MouseOverAbout}
                  onMouseLeave={MouseLeaveAbout}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link style={ContactStyling} to="contact" target="_blank">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>}
     {phoneContent && <div id="mobileView">
        <div id="mySidePanel" class="sidePanel">
          <a href="https://google.com" class="closeBtn" onClick={closeNav()}>
            &times;
          </a>
          <div className="mobileNav">
            <a href="about.html" target="_blank">
              {" "}
              Home
            </a>
            <a href="blog.html" target="_blank">
              {" "}
              Blog
            </a>
            <a href="about.html" target="_blank">
              {" "}
              About Us
            </a>
            <a href="contact.html" target="_blank">
              Contact Us
            </a>
          </div>
        </div>
        <header className="mobileHeading">
          <div className="buttonNav">
            <img
              src={Logo}
              style={{ height: "150px", width: "100px" }}
              alt=""
            />
            <button className="openBtn" onclick={openNav()}>
              ≡
            </button>
          </div>
        </header>
      </div>}
    </div>
  );
}

export default Navbar;
