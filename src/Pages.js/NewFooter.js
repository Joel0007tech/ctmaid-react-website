import React from "react";
import Logo from "./ctmaid 1.png";
import FirstVectorImage from "./Vector (3).png";
import SecondVectorImage from "./Vector.png";
import ThirdVectorImage from "./Vector (1).png";
import FourthVectorImage from "./Vector (2).png";

const Copyright = new Date();
const NewCopyright = Copyright.getFullYear();

const NewFooterFlex = {
  display: "flex",
  height: "100px",
  overflowY: "hidden",
  justifyContent: "space-around",
  position: "static",
  bottom: "0",
};
const VectorImageFlex = {
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  position: "relative",
  top: "65%",
};

function NewFooter() {
  return (
    <div style={NewFooterFlex}>
      <p
        style={{
          fontFamily: "Hanken Grotesk, sans-serif",
          position: "relative",
          top: "60%",
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
          top: "2%",
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

export default NewFooter;
