import React from "react";
import Navbar from "./Nav";
// import Logo from "./ctmaid 1.png";
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
// import FirstClientMobileImage from "./WhatsApp Image 2023-01-27 at 6.31.png";
// import SecondClientMobileImage from "./WhatsApp Image 2023-01-27 at 6.32.png";
// import ThirdClientMobileImage from "./WhatsApp Image 2023-01-27 at 6.33.png";
// import FourthClientMobileImage from "./WhatsApp Image 2023-01-27 at 6.34 (1).png";
// import FifthClientMobileImage from "./cli_5-be6da251.svg";
// import SixthClientMobileImage from "./cli_6-bef36947.svg";
// import SeventhClientMobileImage from "./cli_7-e305d0b7.svg";
// import FirstVectorImage from "./Vector (3).png";
// import SecondVectorImage from "./Vector.png";
// import ThirdVectorImage from "./Vector (1).png";
// import FourthVectorImage from "./Vector (2).png";
import FirstMobileImage from "./head_4-8bb48958.png";
import SecondMobileImage from "./head_2-a1723a84.png";
import ThirdMobileImage from "./sol_2-1fbb264d.svg";
import FourthMobileImage from "./sol_3-3ad25d14.svg";
import Footer from "./footer";
import "./Home.css";

// function OpenNav() {
//   document.getElementById("mySidepanel").style.width = "100%";
// }

// function CloseNav() {
//   document.getElementById("mySidepanel").style.width = "0";
// }

function Home() {
  return (
    <div>
      <Navbar />
      {/* <div id="mobileView">
        <div id="mySidepanel" className="sidePanel">
          <a
            href="https://google.com"
            className="closeBtn"
            onClick={CloseNav()}
          >
            &times;
          </a>
          <div class="mobile-nav">
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
        <div className="buttonNav">
          <img
            src={Logo}
            className="imgNav"
            style={{ height: "100px", width: "200px" }}
            alt=""
          />
          <button className="openBtn" onclick={OpenNav()}>
            ≡
          </button>
        </div>
      </div>
    
        
       
        
        <div className="clients-mobile">
          <h3 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            Meet Our Clients
          </h3>
          <div className="clientsImgflexMobile">
            <img
              src={FirstClientMobileImage}
              alt=""
              width="150px"
              height="100px"
            />
            <img
              src={SecondClientMobileImage}
              alt=""
              width="200px"
              height="30px"
              class="mobil"
            />
            <img
              src={ThirdClientMobileImage}
              alt=""
              width="200px"
              height="100px"
            />
            <img
              src={FourthClientMobileImage}
              alt=""
              width="200px"
              height="100px"
            />
            <img
              src={FifthClientMobileImage}
              alt=""
              height="100px"
              width="150px"
            />
            <img
              src={SixthClientMobileImage}
              alt=""
              height="100px"
              width="150px"
            />
            <img
              src={SeventhClientMobileImage}
              alt=""
              height="100px"
              width="150px"
              class="uba"
            />
          </div>
        </div>
        <div className="requestParagraphlinkMobile">
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            Intent in being responsible in
            <br /> creating a sustainable future for
            <br /> our planet?
          </p>
          <a href="http//">Request for waste collection</a>
        </div>
        <div className="binImagesmobile">
          <img src={BtnImageItem} alt="" width="500px" />
        </div>
      </div>
      <footer id="footerItemsmobile">
        <p>
          @ 2023, CTMaid Synergy Ltd. All rights
          <br /> reserved
        </p>
        <img src={Logo} alt="" height="150px" className="footerLogo" />
        <div className="linksMobile">
          <img
            src={FirstVectorImage}
            alt=""
            srcset=""
            height="30px"
            width="20px"
          />
          <img
            src={SecondVectorImage}
            alt=""
            srcset=""
            height="30px"
            width="37px"
          />
          <img
            src={ThirdVectorImage}
            alt=""
            srcset=""
            height="30px"
            width="25px"
          />
          <img src={FourthVectorImage} alt="" height="30px" width="28px" />
        </div>
      </footer> */}
      <div className="firstSection">
        <h2>CTMAID SYNERGY</h2>
        <p className="firstSectionparagraph">
          The waste we create today will have an impact on our planet for
          <br />
          years to come, let's make sure it's a positive one.
        </p>
        <p className="firstSectionmobileParagraph">
          The waste we create today will have an <br /> impact our planet for
          years to come,
          <br /> let's make sure it's a positive one.
        </p>
        <div className="firstSectionimageFlex">
          <img src={FirstSynergyImage} alt="" className="firstSynergyimage" />
          <img src={SecondSynergyImage} alt="" className="secondSynergyimage" />
          <img
            src={FirstMobileImage}
            alt=""
            className="firstMobileimage"
            style={{ width: "350px", height: "220px" }}
          />
          <img
            src={SecondMobileImage}
            alt=""
            className="secondMobileimage"
            style={{ width: "350px", height: "220px" }}
          />
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
            <h4>100+</h4>
            <p>Empowered waste pickers</p>
          </div>
          <div className="secondImpactitemsFlex">
            <img src={SecondImpactImage} alt="" />
            <h4>20+</h4>
            <p>Professional workers</p>
          </div>
          <div className="thirdImpactitemsFlex">
            <img src={ThirdImpactImage} alt="" />
            <h4>1000+</h4>
            <p>Residents served</p>
          </div>
          <div className="fourthImpactitemsFlex">
            <img src={FourthImpactImage} alt="" />
            <h4>10+ tonnes</h4>
            <p>Plastic weight recycle monthly</p>
          </div>
        </div>
      </div>
      <div className="thirdSection">
        <h2>How may we be of assistance?</h2>
        <p className="thirdSectionparagraph">
          We work to reduce, reuse, and recycle to create a cleaner, healthier
          and more sustainable future.
        </p>
        <p className="thirdSectionparagraphMobile">
          We work to reduce, reuse, and recycle
          <br />
          to create a cleaner, healthier and more
          <br /> sustainable future.
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
        <div className="assistanceCardsmobile">
          <div className="firstAssistancesubCardsmobile">
            <h3>Mission</h3>
            <p>
              We are committed to attaining efficient waste
              <br />
              management systems and employing versatile
              <br />
              solutions and best practices in order to give our
              <br /> customers a pollution free environment via regular
              <br /> and on-time service delivery methods.
            </p>
          </div>
          <div className="secondAssistancesubCardsmobile">
            <h3>Vision</h3>
            <p>
              To be the best provider of environmental services in
              <br /> Africa.
            </p>
          </div>
        </div>
      </div>
      <div className="fourthSection">
        <h2>Solutions for Various Industries</h2>
        <p className="fourthSectionparagraph">
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
        <div className="solutionsMobile">
          <h3 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            Solutions for Various
            <br /> Industries
          </h3>
          <p>
            In order to create a cleaner and healthier
            <br />
            environment, we create solutions in the
            <br /> following areas:
          </p>
        </div>
        <div className="solutionsFlexmobile">
          <div className="firstSolutionsflexMobile">
            <img src={FirstSolutionImage} alt="" width="150px" height="150px" />
            <h3>E-Waste Management</h3>
            <p>
              E-waste management is defined as a holistic
              <br />
              method of cutting down electronic waste from the
              <br />
              earth to prevent its harmful and toxic effect from
              <br />
              deteriorating the earth.
            </p>
          </div>
          <div className="secondSolutionsflexMobile">
            <img src={ThirdMobileImage} alt="" width="150px" height="150px" />
            <h3>Plastic Waste Management</h3>
            <p>
              The reprocessing of plastic waste into new
              <br />
              products which in turn reduces dependence on
              <br />
              landfill and protects the environment from plastic
              <br />
              pollution.
            </p>
          </div>
          <div className="thirdSolutionsflexMobile">
            <img src={FourthMobileImage} alt="" width="150px" height="150px" />
            <h3>Municipal Waste Management</h3>
            <p>
              Waste produced by individual and households are
              <br />
              being collected separated, reused, stored,
              <br />
              transported and recycled on a daily basis
            </p>
          </div>
          <div className="fourthSolutionsflexMobile">
            <img
              src={FourthSolutionImage}
              alt=""
              width="150px"
              height="150px"
            />
            <h3>Cleaning Services</h3>
            <p>
              Cleaning Services has an integrated service that
              <br />
              takes care of all the stages of cleaning, sanitising,
              <br />
              and waste management of small and large spaces.
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
        <div className="requestsParagraphlink">
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
      <h3 className="act">hi</h3>
    </div>
  );
}

export default Home;
