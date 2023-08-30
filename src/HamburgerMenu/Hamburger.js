import React, {useState} from 'react';
import style from './Hamburger.module.scss'
import Items from "./HamburgerItems/Items";

const Hamburger = () => {

  const [isActive,setIsActive] = useState(false)
  const changeActive = () => {
    document.body.classList.toggle('lock');
    setIsActive(!isActive);
  };


 const closeModalAfterClickItem = () => {
   setIsActive(false)
 }

  return (
    <div>
      <div className={`${style.headerBurger} ${isActive ? style.active : null}`} onClick={changeActive}>
        <span></span>
        <nav>
        <div className={style.menu}>
          <ul className={style.items}>
            <Items callback={closeModalAfterClickItem} position={'home'} title={'Home'}></Items>
            <Items callback={closeModalAfterClickItem} position={'menu'} title={'Menu'}></Items>
            <Items callback={closeModalAfterClickItem} position={'services'} title={'Services'}></Items>
            <Items callback={closeModalAfterClickItem} position={'blog'} title={'Blog'}></Items>
            <Items callback={closeModalAfterClickItem} position={'about'} title={'About'}></Items>
            <Items callback={closeModalAfterClickItem} position={'contact'} title={'Contact'}></Items>

          </ul>
        </div>
        </nav>
      </div>
    </div>
  );
};

export default Hamburger;