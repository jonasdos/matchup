import React from "react";
//import "./Banner.css"; // Import CSS for styling

const Banner = ({ backgroundImage, children }) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "300px", // Full viewport height
    borderRadius: "20px",
    // Add styles for the title in a CSS file or inline
  };

  return (
    <div style={bannerStyle} className="banner">
      {children}
    </div>
  );
};

export default Banner;
