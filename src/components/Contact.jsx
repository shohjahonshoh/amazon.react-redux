import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="contact-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
