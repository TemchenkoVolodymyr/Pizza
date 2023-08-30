import React from 'react';
import style from "../Slide.module.scss";
import {Link} from "react-scroll";

const LinkItemsSlider = () => {
  return (
    <div className={style.btns}>
      <Link to={'menu'} smooth={true} duration={500}>
        <button className={style.order}>Order Now</button>
      </Link>
      <Link to={'price'} smooth={true} duration={500}>
        <button className={style.view}>View Menu</button>
      </Link>
    </div>
  );
};

export default LinkItemsSlider;