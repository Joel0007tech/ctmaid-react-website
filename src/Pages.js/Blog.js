import React from "react";
import Navbar from "./Nav";
import NewFooter from "./NewFooter";
import FirstBlogImage from "./istockphoto-1130535812-612x612 3 (1).png";
import SecondBlogImage from "./istockphoto-1130535812-612x612 4.png";

const BlogItems = {
  display: "flex",
  padding: "7%",
  backgroundColor: "whitesmoke",
};
const FirstHeadingContent = {
  fontFamily: "Hanken Grotesk,sans-serif",
  fontSize: "16px",
  fontStyle: "italic",
  fontWeight: "500",
  marginBottom: "3%",
};
const SecondHeadingContent = {
  fontFamily: "Hanken Grotesk,sans-serif",
  fontSize: "40px",
  paddingTop: "5%",
};
const ThirdHeadingContent = {
  fontFamily: "Hanken Grotesk,sans-serif",
  paddingTop: "13%",
  marginBottom: "2%",
  color: "black",
};
const FourthHeadingContent = {
  fontFamily: "Hanken Grotesk,sans-serif",
  paddingTop: "13%",
  marginBottom: "2%",
  color: "black",
};
const OrderedListItem = {
  listStylePositon: "inside",
  listStyleType: "decimal",
  fontFamily: "Hanken Grotesk,sans-serif",
  fontSize: "16px",
  fontWeight: "700",
  color: "gray",
  marginTop: "10px",
};
const UnorderListItem = {
  fontFamily: "Hanken Grotesk,sans-serif",
  listStylePositon: "inside",
  listStyleType: "symbols(bullet)",
  fontSize: "16px",
  fontWeight: "700",
  color: "gray",
  marginTop: "10px",
};

function Blog() {
  return (
    <div>
      <Navbar />
      <div style={BlogItems}>
        <div>
          <h2 style={FirstHeadingContent}>Blog post for 23rd January, 2023</h2>
          <h1 style={SecondHeadingContent}>UNTITLED BLOG POST</h1>
          <h3 style={ThirdHeadingContent}>
            What you need to know about waste management
          </h3>
          <ol>
            <li style={OrderedListItem}>
              Proper waste management is essential for protecting the
              environment and preserving natural resources.
            </li>
            <li style={OrderedListItem}>
              Incineration is a common method of waste management that reduces
              the volume of solid waste and generates
              <br />
              energy.
            </li>
            <li style={OrderedListItem}>
              Landfills are the most common method of waste disposal, but they
              can have negative impacts on the environment
              <br />
              if not managed properly.
            </li>
            <li style={OrderedListItem}>
              Recycling is an important aspect of waste management that helps to
              conserve resources and reduce pollution.
            </li>
            <li style={OrderedListItem}>
              Composting is an effective way to manage organic waste, such as
              food scraps and yard waste, and turn it into
              <br />
              nutrient-rich soil.
            </li>
            <li style={OrderedListItem}>
              Hazardous waste, such as chemicals and batteries, require special
              handling and disposal methods to protect
              <br />
              human health and the environment.
            </li>
            <li style={OrderedListItem}>
              Integrated waste management approaches, such as reducing, reusing,
              and recycling, are necessary for achieving
              <br />
              sustainable waste management goals.
            </li>
          </ol>
          <h3 style={FourthHeadingContent}>
            You have a responsibility to care about your society
          </h3>
          <ul>
            <li style={UnorderListItem}>
              Landfills are the most common method of waste disposal, but they
              can have negative impacts on the environment
              <br />
              if not managed properly.
            </li>
            <li style={UnorderListItem}>
              Recycling is an important aspect of waste management that helps to
              conserve resources and reduce pollution.
            </li>
            <li style={UnorderListItem}>
              Composting is an effective way to manage organic waste, such as
              food scraps and yard waste, and turn it into
              <br />
              nutrient-rich soil.
            </li>
            <li style={UnorderListItem}>
              Hazardous waste, such as chemicals and batteries, require special
              handling and disposal methods to protect
              <br />
              human health and the environment.
            </li>
            <li style={UnorderListItem}>
              Integrated waste management approaches, such as reducing, reusing,
              and recycling, are necessary for achieving
              <br />
              sustainable waste management goals.
            </li>
          </ul>
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
      <NewFooter />
    </div>
  );
}

export default Blog;
