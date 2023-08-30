import React from 'react';
import style from "../Menu.module.scss";
import romb from "../../../assets/romb.png";

const TextPricingMenu = () => {
  return (
    <div className={style.containerPrice}>
      <h1>OUR MENU PRICING</h1>
      <img src={romb} alt="image"/>
      <p>Did you know that the size of a restaurant kitchen doesn’t necessarily matter, but smart,
        high-functioning design does? A clean, attractive dining room is a must-have, but we all know the real
        magic starts in the kitchen. The size of your kitchen doesn’t necessarily matter, but smart,
        high-functioning design does, especially for frazzled staff on a busy night when the online orders are
        piling up in the POS and the line is stretching out the door</p>

    </div>
  );
};

export default TextPricingMenu;