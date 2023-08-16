import React from "react";
import style from './Header.module.scss'
import logo from '../../assets/logo.png'
import {Link} from "react-scroll";
import cart from '../../assets/cart.png'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {

  const dataOrderCart = useSelector((state) => state.cart.orders)
  return (
    <>
      <div className={style.header}>
        <div className={style.container}>
          <div className={style.logo}>
            <Link to={'home'} smooth={true} duration={500}>
              <img src={logo} alt="logo"/>
            </Link>
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
          <NavLink to={'cart'}>
          <div className={style.cart}>
            <img src={cart} alt={'cart'}/>
            <p>Cart Item</p>
            <p>{dataOrderCart ? dataOrderCart.length : 0}</p>
          </div>
        </NavLink>
        </div>
      </div>
    </>
  )
}
export default Header;