import React from "react";
import Navbar from "./Nav";
import FirstSynergyImage from "./Rectangle-2.svg";
import SecondSynergyImage from "./Rectangle.svg";
import ThirdSynergyImage from "./Rectangle-1.svg";
import FirstImpactImage from "./Intersect-5.svg";
import SecondImpactImage from "./Intersect-6.svg";
import ThirdImpactImage from "./Intersect-7.svg";
import FourthImpactImage from "./Intersect-4.svg";
import FirstSolutionImage from "./Intersect.svg";
import SecondSolutionImage from "./Intersect-2.svg";
import ThirdSolutionImage from "./Intersect-3.svg";
import FourthSolutionImage from "./Intersect-1.svg";
import FirstClientImage from "./WhatsApp Image 2023-01-27 at 6.31.png";
import SecondClientImage from "./WhatsApp Image 2023-01-27 at 6.32.png";
import ThirdClientImage from "./WhatsApp Image 2023-01-27 at 6.33.png";
import FourthClientImage from "./WhatsApp Image 2023-01-27 at 6.34 (1).png";
import FifthClientImage from "./WhatsApp Image 2023-01-27 at 6.39.png";
import BtnImageItem from "./Rectangle-3.svg";
import RequestsImage from "./hamza-javaid-PizD8punZsw-unsplash.svg";
import Footer from "./footer";

const FirstSection = {
  backgroundColor: "whitesmoke",
  paddingTop: "8rem",
};
const FirstSectionHeading = {
  color: "black",
  textAlign: "center",
  fontSize: "30px",
  marginBottom: "30px",
  fontFamily: "Hanken Grotesk, sans-serif",
  fontWeight: "900",
};
const FirstSectionParagraph = {
  color: "black",
  textAlign: "center",
  fontSize: "20px",
  fontFamily: "Hanken Grotesk, sans-serif",
  fontWeight: "500",
};
const FirstSectionImageFlex = {
  display: "flex",
  flexDirection: "row",
  gap: "70px",
  justifyContent: "center",
  marginTop: "5%",
};

const SecondSection = {
  paddingTop: "5%",
  backgroundColor: "whitesmoke",
};
const SecondSectionHeading = {
  textAlign: "center",
  color: "black",
  fontSize: "30px",
  fontFamily: "Hanken Grotesk, sans-serif",
  fontWeight: "900",
  paddingTop: "4%",
};
const SecondSectionParagraph = {
  textAlign: "center",
  color: "black",
  fontSize: "20px",
  fontFamily: "Hanken Grotesk, sans-serif",
  fontWeight: "500",
  marginTop: "10px",
};
const ImpactItemsFlex = {
  display: "flex",
  gap: "50px",
  marginTop: "5%",
  justifyContent: "center",
  boxShadow: "0px 0px 90px 0.1px rgba(0, 0, 2, 0.1)",
};
const FirstImpactItemsFlex = {
  backgroundColor: "white",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  paddingLeft: "35px",
  paddingRight: "35px",
  height: "120px",
};
const SecondImpactItemsFlex = {
  backgroundColor: "white",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  paddingLeft: "35px",
  paddingRight: "35px",
  height: "120px",
};
const ThirdImpactItemsFlex = {
  backgroundColor: "white",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  paddingLeft: "35px",
  paddingRight: "35px",
  height: "120px",
};
const FourthImpactItemsFlex = {
  backgroundColor: "white",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  paddingLeft: "35px",
  paddingRight: "35px",
  height: "120px",
};
const ImpactItemsFlexHeading = {
  textAlign: "center",
  color: "orange",
  fontSize: "25px",
  fontFamily: "Hanken Grotesk, sans-serif",
  position: "relative",
  bottom: "20px",
  fontWeight: "600",
};
const ImpactItemsFlexParagraph = {
  textAlign: "center",
  fontSize: "16px",
  fontFamily: "Hanken Grotesk, sans-serif",
  fontWeight: "600",
  position: "relative",
  bottom: "50%",
};
const ThirdSection = {
  paddingTop: "9%",
};
const ThirdSectionHeading = {
  textAlign: "center",
  color: "black",
  fontSize: "30px",
  fontFamily: "Hanken Grotesk, sans-serif",
  fontWeight: "900",
};
const ThirdSectionParagraph = {
  textAlign: "center",
  color: "black",
  fontSize: "20px",
  marginTop: "10px",
  fontFamily: "Hanken Grotesk, sans-serif",
  fontWeight: "500",
};
const AssistanceFlex = {
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  justifyContent: "center",
  marginTop: "5%",
};
const FirstAssistanceFlex = {
  display: "flex",
};
const FirstHeadingAssistanceFlex = {
  width: "130px",
  height: "80px",
  borderRadius: "50%",
  textAlign: "center",
  backgroundColor: "steelblue",
  color: "white",
  padding: "15px",
  paddingTop: "3.9rem",
  position: "relative",
  left: "150px",
  bottom: "5px",
  fontFamily: "Hanken Grotesk, sans-serif",
};
const FirstParagraphAssistanceFlex = {
  backgroundColor: "rgb(212, 217, 221)",
  borderRadius: "70px",
  fontSize: "13px",
  width: "320px",
  textAlign: "justify",
  height: "130px",
  paddingTop: "2rem",
  paddingLeft: "10rem",
  fontFamily: "Hanken Grotesk, sans-serif",
  fontWeight: "600",
  lineHeight: "20px",
  color: "gray",
};
const SecondAssistanceFlex = {
  display: "flex",
};
const SecondHeadingAssistanceFlex = {
  width: "130px",
  height: "80px",
  borderRadius: "50%",
  textAlign: "center",
  backgroundColor: "orange",
  color: "white",
  padding: "15px",
  paddingTop: "4rem",
  position: "relative",
  left: "150px",
  bottom: "5px",
  fontFamily: "Hanken Grotesk, sans-serif",
};
const SecondParagraphAssistanceFlex = {
  backgroundColor: "rgb(243, 217, 221)",
  borderRadius: "70px",
  fontSize: "13px",
  width: "310px",
  textAlign: "justify",
  height: "120px",
  paddingTop: "2.5rem",
  paddingLeft: "10rem",
  fontFamily: "Hanken Grotesk, sans-serif",
  fontWeight: "600",
  lineHeight: "20px",
  color: "gray",
};

const FourthSection = {
  paddingTop: "6%",
  backgroundColor: "whitesmoke",
  fontFamily: "Hanken Grotesk, sans-serif",
};
const FourthSectionHeading = {
  textAlign: "center",
  fontSize: "25px",
};
const FourthSectionParagraph = {
  textAlign: "center",
  fontSize: "20px",
  fontFamily: "Hanken Grotesk, sans-serif",
  fontWeight: "500",
};
const SolutionFlex = {
  display: "flex",
  gap: "30px",
  justifyContent: "center",
  paddingTop: "3%",
  boxShadow: "0px 0px 90px 0.1px rgba(0, 0, 2, 0.1)",
};
const SolutionFlexHeading = {
  textAlign: "center",
  fontSize: "16px",
  color: "steelblue",
  fontFamily: "Hanken Grotesk, sans-serif",
};
const SolutionFlexParagraph = {
  textAlign: "center",
  fontSize: "13px",
  fontFamily: "Hanken Grotesk, sans-serif",
  fontWeight: "700",
  color: "gray",
};
const FirstSolutionFlex = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "35px",
  backgroundColor: "white",
  borderRadius: "45%",
  borderBottom: "none",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
};
const SecondSolutionFlex = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "35px",
  backgroundColor: "white",
  borderRadius: "45%",
  borderBottom: "none",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
};
const ThirdSolutionFlex = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "15px",
  paddingTop: "2.4%",
  backgroundColor: "white",
  borderRadius: "45%",
  borderBottom: "none",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
};
const FourthSolutionFlex = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "35px",
  backgroundColor: "white",
  borderRadius: "45%",
  borderBottom: "none",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
};

const Clients = { padding: "7%" };
const ClientsHeading = {
  textAlign: "center",
  fontSize: "25px",
  fontFamily: "Hanken Grotesk, sans-serif",
};
const ClientsImageFlex = {
  display: "flex",
  gap: "50px",
  paddingTop: "3%",
  justifyContent: "space-around",
};

const BtnImage = {
  display: "flex",
  justifyContent: "center",
  padding: "7%",
};
const Requests = {
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  marginTop: "9%",
  backgroundColor: "rgb(212, 217, 221)",
};
const RequestsParagraphLink = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  marginTop: "10px",
};
const RequestsParagraph = {
  fontSize: "30px",
  fontFamily: "Hanken Grotesk, sans-serif",
  fontWeight: "900",
  wordSpacing: "2px",
};
const RequestsLink = {
  padding: "10px",
  textDecoration: "none",
  fontFamily: "Hanken Grotesk, sans-serif",
  backgroundColor: "steelblue",
  textAlign: "center",
  width: "fit-content",
  borderRadius: "10px",
  paddingLeft: "15px",
  paddingRight: "15px",
  fontWeight: "800",
  color: "white",
};
function Home() {
  return (
    <div>
      <Navbar />
      <div style={FirstSection}>
        <h2 style={FirstSectionHeading}>CTMAID SYNERGY</h2>
        <p style={FirstSectionParagraph}>
          The waste we create today will have an impact on our planet for
          <br />
          years to come, let's make sure it's a positive one.
        </p>
        <div style={FirstSectionImageFlex}>
          <img src={FirstSynergyImage} alt="" />
          <img src={SecondSynergyImage} alt="" />
          <img src={ThirdSynergyImage} alt="" />
        </div>
      </div>
      <div style={SecondSection}>
        <h2 style={SecondSectionHeading}>Our Impact</h2>
        <p style={SecondSectionParagraph}>
          CTMaid Synergy is making social, environmental and economic impacts in
          the cities it operates.
        </p>
        <div style={ImpactItemsFlex}>
          <div style={FirstImpactItemsFlex}>
            <img src={FirstImpactImage} alt="" />
            <h4 style={ImpactItemsFlexHeading}>100</h4>
            <p style={ImpactItemsFlexParagraph}>Empowered waste pickers</p>
          </div>
          <div style={SecondImpactItemsFlex}>
            <img src={SecondImpactImage} alt="" />
            <h4 style={ImpactItemsFlexHeading}>20</h4>
            <p style={ImpactItemsFlexParagraph}>Professional workers</p>
          </div>
          <div style={ThirdImpactItemsFlex}>
            <img src={ThirdImpactImage} alt="" />
            <h4 style={ImpactItemsFlexHeading}>1000 +</h4>
            <p style={ImpactItemsFlexParagraph}>Residents served</p>
          </div>
          <div style={FourthImpactItemsFlex}>
            <img src={FourthImpactImage} alt="" />
            <h4 style={ImpactItemsFlexHeading}>10 tonnes</h4>
            <p style={ImpactItemsFlexParagraph}>Plastic weight recycle</p>
          </div>
        </div>
      </div>
      <div style={ThirdSection}>
        <h2 style={ThirdSectionHeading}>How may we be of assistance?</h2>
        <p style={ThirdSectionParagraph}>
          We work to reduce, reuse, and recycle to create a cleaner, healthier
          and more sustainable future.
        </p>
        <div style={AssistanceFlex}>
          <div style={FirstAssistanceFlex}>
            <h3 style={FirstHeadingAssistanceFlex}>MISSION</h3>
            <p style={FirstParagraphAssistanceFlex}>
              We are committed to attaining efficient waste
              <br />
              management systems and employing versatile
              <br />
              solutions and best practices in order to give
              <br />
              our customers a pollution free environment via
              <br />
              regular and on-time service delivery methods.
            </p>
          </div>
          <div style={SecondAssistanceFlex}>
            <h3 style={SecondHeadingAssistanceFlex}>VISION</h3>
            <p style={SecondParagraphAssistanceFlex}>
              To be the best provider of environmental
              <br />
              services in Africa.
            </p>
          </div>
        </div>
      </div>
      <div style={FourthSection}>
        <h2 style={FourthSectionHeading}>Solutions for Various Industries</h2>
        <p style={FourthSectionParagraph}>
          Our crew work together to reduce, reuse, and recycle to create a
          cleaner, healthier and more sustainable future
        </p>
        <div style={SolutionFlex}>
          <div style={FirstSolutionFlex}>
            <img
              src={FirstSolutionImage}
              alt=""
              style={{
                width: "150px",
                height: "150px",
                display: "block",
                margin: "0 auto",
              }}
            />
            <h3 style={SolutionFlexHeading}>E-Waste Management</h3>
            <p style={SolutionFlexParagraph}>
              Hazardous waste, such as
              <br />
              chemicals and batteries, require
              <br />
              special handling and disposal
              <br />
              methods to protect human health
              <br />
              and the environment.
            </p>
          </div>
          <div style={SecondSolutionFlex}>
            <img
              src={SecondSolutionImage}
              alt=""
              style={{
                width: "150px",
                height: "150px",
                display: "block",
                margin: "0 auto",
              }}
            />
            <h3 style={SolutionFlexHeading}>Plastic Waste Management</h3>
            <p style={SolutionFlexParagraph}>
              Hazardous waste, such as
              <br />
              chemicals and batteries, require
              <br />
              special handling and disposal
              <br />
              methods to protect human health
              <br />
              and the environment.
            </p>
          </div>
          <div style={ThirdSolutionFlex}>
            <img
              src={ThirdSolutionImage}
              alt=""
              style={{
                width: "150px",
                height: "150px",
                display: "block",
                margin: "0 auto",
              }}
            />
            <h3 style={SolutionFlexHeading}>Municipal Waste Management</h3>
            <p style={SolutionFlexParagraph}>
              Hazardous waste, such as
              <br /> chemicals and batteries, require
              <br /> special handling and disposal
              <br /> methods to protect human health
              <br /> and the environment.
            </p>
          </div>
          <div style={FourthSolutionFlex}>
            <img
              src={FourthSolutionImage}
              alt=""
              style={{
                width: "150px",
                height: "150px",
                display: "block",
                margin: "0 auto",
              }}
            />
            <h3 style={SolutionFlexHeading}>Cleaning Services</h3>
            <p style={SolutionFlexParagraph}>
              Proper waste management is
              <br /> crucial for preserving the planet
              <br /> for future generations.
            </p>
          </div>
        </div>
        <div style={Clients}>
          <h4 style={ClientsHeading}>Meet Our Clients</h4>
          <div style={ClientsImageFlex}>
            <img
              src={FirstClientImage}
              alt=""
              style={{ width: "200px", height: "150px" }}
            />
            <img
              src={SecondClientImage}
              alt=""
              style={{
                width: "200px",
                height: "30px",
                position: "relative",
                top: "50px",
              }}
            />
            <img
              src={ThirdClientImage}
              alt=""
              style={{ width: "200px", height: "150px" }}
            />
            <img
              src={FourthClientImage}
              alt=""
              style={{ width: "200px", height: "150px" }}
            />
            <img
              src={FifthClientImage}
              alt=""
              style={{
                width: "200px",
                height: "50px",
                position: "relative",
                top: "40px",
              }}
            />
          </div>
        </div>
      </div>
      <div style={BtnImage}>
        <img src={BtnImageItem} alt="" style={{ width: "1500px" }} />
      </div>
      <div style={Requests}>
        <img src={RequestsImage} alt="" />
        <div style={RequestsParagraphLink}>
          <p style={RequestsParagraph}>
            Intent in being responsible in creating a<br />
            sustainable future for our planet?
          </p>
          <a href="http//" style={RequestsLink}>
            Request for waste collection
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
