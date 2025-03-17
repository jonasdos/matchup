import React from "react";
import styles from "./AlertMsg.module.css";

const AlertMsg = ({ msg }) => {
  return <p className={styles.alert}>{msg}</p>;
};

export default AlertMsg;
