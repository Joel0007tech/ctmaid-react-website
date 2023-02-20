import React from "react";
import "./Mobilenav.css";
import Logo from "./ctmaid 1.png";

function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function MobileNavbar() {
  return (
    <div>
      <div id="mobileView">
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
      </div>
    </div>
  );
}

export default MobileNavbar;
