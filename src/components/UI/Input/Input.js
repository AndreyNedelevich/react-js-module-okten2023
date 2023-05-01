import styles from "./Input.module.css";
import React from "react";

const Input = (props, ref) => {
    return <input className={styles.input} {...props}></input>;
};

export default Input;