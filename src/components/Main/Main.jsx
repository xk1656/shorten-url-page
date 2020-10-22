import React from "react";
import "./Main.style.scss";
import Box from "../Box/Box";
import ShortenBox from "../ShortenBox/ShortenBox";
import InfoBox from "../InfoBox/InfoBox";

const info = [
  {
    id: 1,
    text:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    title: "Brand Recognition",
    imgUrl: "/images/icon-brand-recognition.svg",
  },
  {
    id: 2,
    text:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    title: "Detailed Records",
    imgUrl: "/images/icon-detailed-records.svg",
  },
  {
    id: 3,
    text:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    title: "Brand Recognition",
    imgUrl: "/images/icon-fully-customizable.svg",
  },
];

const Main = () => {
  return (
    <div className="main">
      <ShortenBox></ShortenBox>
      <div className="main_container">
        <div className="main_text">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="main_boxes">
          {info.map((info) => (
            <Box key={info.id} info={info}></Box>
          ))}
        </div>
      </div>
      <div className="main_link">
        <h2>Boost your links today</h2>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
};

export default Main;
