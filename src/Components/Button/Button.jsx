import React from 'react';
import styles from './Button.module.css';

const Button = ({ label, onClick }) => {
  return (
    <button className={`${styles.Button}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
  