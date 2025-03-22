import React from "react";
import styles from "./Banner.module.css"; // Import CSS for styling

const Banner = ({ backgroundImage, children }) => {
  return (
    <div
      className={styles.bannerStyle}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </div>
  );
};

export default Banner;
