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
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="firstSection">
        <h3 className="act"> hello</h3>
        <h2>CTMAID SYNERGY</h2>
        <p>
          The waste we create today will have an impact on our planet for
          <br />
          years to come, let's make sure it's a positive one.
        </p>
        <div className="firstSectionimageFlex">
          <img src={FirstSynergyImage} alt="" />
          <img src={SecondSynergyImage} alt="" />
          <img src={ThirdSynergyImage} alt="" />
        </div>
      </div>
      <div className="secondSection">
        <h2>Our Impact</h2>
        <p>
          CTMaid Synergy is making social, environmental and economic impacts in
          the cities it operates.
        </p>
        <div className="impactItemsflex">
          <div className="firstImpactitemsFlex">
            <img src={FirstImpactImage} alt="" />
            <h4>100</h4>
            <p>Empowered waste pickers</p>
          </div>
          <div className="secondImpactitemsFlex">
            <img src={SecondImpactImage} alt="" />
            <h4>20</h4>
            <p>Professional workers</p>
          </div>
          <div className="thirdImpactitemsFlex">
            <img src={ThirdImpactImage} alt="" />
            <h4>1000 +</h4>
            <p>Residents served</p>
          </div>
          <div className="fourthImpactitemsFlex">
            <img src={FourthImpactImage} alt="" />
            <h4>10 tonnes</h4>
            <p>Plastic weight recycle</p>
          </div>
        </div>
      </div>
      <div className="thirdSection">
        <h2>How may we be of assistance?</h2>
        <p>
          We work to reduce, reuse, and recycle to create a cleaner, healthier
          and more sustainable future.
        </p>
        <div className="assistanceFlex">
          <div className="firstAssistanceflex">
            <h3>MISSION</h3>
            <p>
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
          <div className="secondAssistanceflex">
            <h3>VISION</h3>
            <p>
              To be the best provider of environmental
              <br />
              services in Africa.
            </p>
          </div>
        </div>
      </div>
      <div className="fourthSection">
        <h2>Solutions for Various Industries</h2>
        <p>
          Our crew work together to reduce, reuse, and recycle to create a
          cleaner, healthier and more sustainable future
        </p>
        <div className="solutionFlex">
          <div className="firstSolutionflex">
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
            <h3>E-Waste Management</h3>
            <p>
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
          <div className="secondSolutionflex">
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
            <h3>Plastic Waste Management</h3>
            <p>
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
          <div className="thirdSolutionflex">
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
            <h3>Municipal Waste Management</h3>
            <p>
              Hazardous waste, such as
              <br /> chemicals and batteries, require
              <br /> special handling and disposal
              <br /> methods to protect human health
              <br /> and the environment.
            </p>
          </div>
          <div className="fourthSolutionflex">
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
            <h3>Cleaning Services</h3>
            <p>
              Proper waste management is
              <br /> crucial for preserving the planet
              <br /> for future generations.
            </p>
          </div>
        </div>
        <div className="clients">
          <h4>Meet Our Clients</h4>
          <div className="clientsImageflex">
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
      <div className="btnImage">
        <img src={BtnImageItem} alt="" style={{ width: "1500px" }} />
      </div>
      <div className="requests">
        <img src={RequestsImage} alt="" />
        <div className="requestsParagraphLink">
          <p>
            Intent in being responsible in creating a<br />
            sustainable future for our planet?
          </p>
          <a href="http//" className="requestsLink">
            Request for waste collection
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
