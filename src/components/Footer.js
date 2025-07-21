import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h4 style={styles.heading}>About Symptoms Checker</h4>
          <p style={styles.text}>
            Our Symptoms Checker web application helps users identify potential health conditions based on their symptoms. This tool is not a substitute for professional medical advice but serves as a helpful guide.
          </p>
        </div>
        <div style={styles.section}>
          <h4 style={styles.heading}>Contact Information</h4>
          <p style={styles.text}>Email: support@symptomschecker.com</p>
          <p style={styles.text}>Phone: +1-234-567-890</p>
          <p style={styles.text}>Address: 123 HealthTech Lane, Wellness City, HC 45678</p>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p style={styles.text}>&copy; 2024 Symptoms Checker. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#282c34",
    color: "#ffffff",
    padding: "20px 0",
    textAlign: "center",
    marginTop: "auto",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "0 20px",
  },
  section: {
    maxWidth: "300px",
    margin: "10px",
  },
  heading: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    borderBottom: "1px solid #ffffff",
    paddingBottom: "5px",
  },
  text: {
    fontSize: "0.9rem",
    lineHeight: "1.5",
  },
  footerBottom: {
    marginTop: "20px",
    borderTop: "1px solid #ffffff",
    paddingTop: "10px",
  },
};

export default Footer;
