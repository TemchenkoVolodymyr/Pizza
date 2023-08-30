import React from 'react';
import {SiCodechef} from "react-icons/si";
import style from "../../RestaurantStuff.module.scss";

const ListOfTowards = ({icon,text,number}) => {
  return (
    <>
      <div>
        <section>
        {icon}
        <p className={style.number}>{number}</p>
        <p className={style.text}>{text}</p>
        </section>
      </div>
    </>
  );
};

export default ListOfTowards;