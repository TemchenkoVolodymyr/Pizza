import React from "react";
import style from './Header.module.scss'
import logo from '../../assets/logo.png'
import {Link} from "react-scroll";

const Header = () => {
  return (
    <>
      <div className={style.header}>
      <div className={style.container}>
        <div>
          <img src={logo} alt="logo"/>
        </div>

        <div className={style.wrapperList}>
          <ul>
            <Link to={'home'} smooth={true} duration={500}>
              <li>Home</li>
            </Link>
            <Link to={'menu'} smooth={true} duration={500}>
              <li>Menu</li>
            </Link>
            <Link to={'services'} smooth={true} duration={500}>
              <li>Services</li>
            </Link>
            <Link to={'blog'} smooth={true} duration={500}>
              <li>Blog</li>
            </Link>

            <Link to={'about'} smooth={true} duration={500}>
              <li>About</li>
            </Link>

            <Link to={'contact'} smooth={true} duration={500}>
              <li>Contact</li>
            </Link>

          </ul>
        </div>
      </div>
      </div>
    </>
  )
}
export default Header;