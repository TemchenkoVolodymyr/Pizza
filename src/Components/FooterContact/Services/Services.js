import React from 'react';
import style from "../FooterContact.module.scss";

const Services = () => {
  return (
    <div className={style.wrapper}>
      <h1>SERVICES</h1>
      <ul>
        <li>Cooked</li>
        <li>Deliver</li>
        <li>Quality Foods</li>
        <li>Mixed</li>
      </ul>
    </div>
  );
};

export default Services;