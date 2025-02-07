import React from "react";
import confetti from "canvas-confetti";
import "./layoutStyles.css";

const Footer = () => {
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 1 }, // Starts from the bottom
    });
  };

  return (
    <footer
      className="bg-dark text-light py-4"
      onClick={handleConfetti}
      style={{ cursor: "pointer" }}
    >
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <p className="mb-0">© 2025 Akshay | MERN Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
