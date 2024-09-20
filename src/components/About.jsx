import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem nemo
        expedita voluptatibus sunt asperiores aliquid a aperiam ex quaerat
        dignissimos eius, officiis iusto. Animi delectus illo ut obcaecati,
        porro dolorum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Sed hic neque voluptates consequatur laudantium molestiae doloribus
        dolorem expedita ducimus, doloremque asperiores at, voluptatem error
        corporis saepe accusamus a animi nostrum?
      </p>

      <h2>Our Products</h2>
      <div className="product-cards">
        <div className="product-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrRfms14nuCwdq9cpK6g5Ml4uXkEQDHonJWA&s" />
          <h3>Mens Clothing</h3>
        </div>
        <div className="product-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzLxHMyVb-yTMXGcut2A8m2_0oOth627w9g&s"
            alt="Womens Clothing"
          />
          <h3>Womens Clothing</h3>
        </div>
        <div className="product-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_0c9mAAA52FIAZw1FMXlkGcmgzdIEj-2lA&s"
            alt="Jewelry"
          />
          <h3>Caps</h3>
        </div>
        <div className="product-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_CMbFPF-Bq4QtMfHLPda1TsgCmAjh9lL8g&s"
            alt="Electronics"
          />
          <h3>Shoes</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
