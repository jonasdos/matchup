import React from "react";
import styles from "./AlertMsg.module.css";

const ErrorMsg = ({ errorMsg }) => {
  if (!errorMsg) return null;
  return <p className={styles.alert}>{errorMsg}</p>;
};

export default ErrorMsg;
