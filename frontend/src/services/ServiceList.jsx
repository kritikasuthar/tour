import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "react-bootstrap";
import weatherImg from "../assets/images/weather.png";
import guidImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Restaurant & Cafe",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imgUrl: guidImg,
    title: "Hotels & Resorts",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imgUrl: customizationImg,
    title: "Famous places",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  }
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
