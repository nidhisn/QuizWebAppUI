import React from 'react';
import styles from './Button.module.css';

const Button = ({ label }) => {
  return <div className={`${styles.Button}`}>{label}</div>;
};

export default Button;
