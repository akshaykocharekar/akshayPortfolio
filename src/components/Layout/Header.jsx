import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom"; // Routing
import "./layoutStyles.css";

const Header = () => {
  // Animation variants for nav links
  const navLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, color: "#ff6b6b" },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Brand name with animation (isolated from navbar menu) */}
        <div className="brand-container">
          <motion.div
            className="navbar-brand"
            initial={{ opacity: 0, x: -20 }} // Initial animation position
            animate={{ opacity: 1, x: 0 }} // Final animation
            transition={{ duration: 0.6 }}
          >
            <TypeAnimation
              sequence={["Akshay", 1000]}
              wrapper="span"
              cursor={true}
              repeat={1} // Repeat only once
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "#ff6b6b",
              }}
            />
          </motion.div>
        </div>

        {/* Navbar toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar menu options (with Skills added) */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <motion.div
            className="navbar-nav mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {["Home", "Projects", "Skills", "Contact"].map((section) => (
              <motion.div
                key={section}
                className="nav-item"
                variants={navLinkVariants}
                whileHover="hover"
              >
                <Link to={`/${section.toLowerCase()}`} className="nav-link">
                  {section}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
