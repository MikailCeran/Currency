import React, { useState } from 'react';
import './Contact.css'; // Import af CSS-styling for kontaktformularen
import './Converter.css'; // Import af yderligere CSS-styling

// Komponent for kontaktformular
export function Contact() {
  // State til at holde formdata
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Funktion til at opdatere formdata ved ændringer i inputfelterne
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Funktion til at håndtere form-submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Her kan du håndtere formdata, f.eks. sende til server eller logge
    console.log(formData);
  };

  // Render komponenten med kontaktformularen
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        {/* Inputfelt for navn */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Inputfelt for e-mail */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Inputfelt for emne */}
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        {/* Tekstareal for besked */}
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {/* Submit-knap */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Eksporterer sidetitel
export const pageTitle = "Contact";
