import React from "react";
import Logo from "./ctmaid 1.png";
import FirstVectorImage from "./Vector (3).png";
import SecondVectorImage from "./Vector.png";
import ThirdVectorImage from "./Vector (1).png";
import FourthVectorImage from "./Vector (2).png";

const Copyright = new Date();
const NewCopyright = Copyright.getFullYear();

const FooterFlex = {
  display: "flex",
  gap: "30px",
  justifyContent: "space-around",
  height: "20px",
};
const VectorImageFlex = {
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  position: "relative",
  top: "130px",
};

function Footer() {
  return (
    <div style={FooterFlex}>
      <p
        style={{
          fontFamily: "Hanken Grotesk, sans-serif",
          position: "relative",
          top: "120px",
        }}
      >
        @ {NewCopyright}, CTMaid Synergy Ltd. All rights reserved
      </p>
      <img
        src={Logo}
        alt=""
        style={{
          height: "200px",
          width: "110px",
          position: "relative",
          top: "70px",
        }}
      />
      <div style={VectorImageFlex}>
        <img
          src={FirstVectorImage}
          alt=""
          style={{ width: "25px", height: "25px" }}
        />
        <img
          src={SecondVectorImage}
          alt=""
          style={{ width: "20px", height: "30px" }}
        />
        <img
          src={ThirdVectorImage}
          alt=""
          style={{ width: "25px", height: "25px" }}
        />
        <img
          src={FourthVectorImage}
          alt=""
          style={{ width: "25px", height: "25px" }}
        />
      </div>
    </div>
  );
}

export default Footer;
