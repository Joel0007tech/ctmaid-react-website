import React from "react";
import Navbar from "./Nav";
import NewFooter from "./NewFooter";
import FirstBlogImage from "./istockphoto-1130535812-612x612 3 (1).png";
import SecondBlogImage from "./istockphoto-1130535812-612x612 4.png";
import "./Blog.css";
import { useMediaQuery } from "react-responsive";

function Blog() {
  const desktopContent = useMediaQuery({ query: "(min-width:429px)" });
  const phoneContent = useMediaQuery({ query: "(max-width:428px)" });
  return (
    <div>
      <Navbar />
      <div className="blogItems">
        <div>
          {desktopContent && <h2>Blog post for 23rd January, 2023</h2>}
          {desktopContent && <h1>UNTITLED BLOG POST</h1>}
          {desktopContent && (
            <h3>What you need to know about waste management</h3>
          )}
          {phoneContent && <h5>hello</h5>}
          {desktopContent && (
            <ol>
              <li>
                Proper waste management is essential for protecting the
                environment and preserving natural resources.
              </li>
              <li>
                Incineration is a common method of waste management that reduces
                the volume of solid waste and generates
                <br />
                energy.
              </li>
              <li>
                Landfills are the most common method of waste disposal, but they
                can have negative impacts on the environment
                <br />
                if not managed properly.
              </li>
              <li>
                Recycling is an important aspect of waste management that helps
                to conserve resources and reduce pollution.
              </li>
              <li>
                Composting is an effective way to manage organic waste, such as
                food scraps and yard waste, and turn it into
                <br />
                nutrient-rich soil.
              </li>
              <li>
                Hazardous waste, such as chemicals and batteries, require
                special handling and disposal methods to protect
                <br />
                human health and the environment.
              </li>
              <li>
                Integrated waste management approaches, such as reducing,
                reusing, and recycling, are necessary for achieving
                <br />
                sustainable waste management goals.
              </li>
            </ol>
          )}

          {desktopContent && (
            <h3>You have a responsibility to care about your society</h3>
          )}
          {desktopContent && (
            <ul>
              <li>
                Landfills are the most common method of waste disposal, but they
                can have negative impacts on the environment
                <br />
                if not managed properly.
              </li>
              <li>
                Recycling is an important aspect of waste management that helps
                to conserve resources and reduce pollution.
              </li>
              <li>
                Composting is an effective way to manage organic waste, such as
                food scraps and yard waste, and turn it into
                <br />
                nutrient-rich soil.
              </li>
              <li>
                Hazardous waste, such as chemicals and batteries, require
                special handling and disposal methods to protect
                <br />
                human health and the environment.
              </li>
              <li>
                Integrated waste management approaches, such as reducing,
                reusing, and recycling, are necessary for achieving
                <br />
                sustainable waste management goals.
              </li>
            </ul>
          )}

          <img
            src={SecondBlogImage}
            alt=""
            style={{ position: "relative", left: "90%", width: "450px" }}
          />
        </div>
        <img
          src={FirstBlogImage}
          alt=""
          style={{
            height: "700px",
            width: "450px",
            position: "relative",
            top: "50px",
          }}
        />
      </div>
      {desktopContent && <NewFooter />}
      {phoneContent && (
        <div className="blogMobile">
          {phoneContent && <h5>Blog post for 23rd January, 2023</h5>}
          <h4>UNTITLED BLOG POST</h4>
        </div>
      )}
    </div>
  );
}

export default Blog;
