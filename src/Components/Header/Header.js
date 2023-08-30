import React from "react";
import style from './Header.module.scss'
import logo from '../../assets/logo.png'
import {Link} from "react-scroll";
import cart from '../../assets/cart.png'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import Hamburger from "../../HamburgerMenu/Hamburger";
import HeaderItems from "./HeaderItems/HeaderItems";

const Header = () => {

  const dataOrderCart = useSelector((state) => state.cart.orders)
  return (
    <>
      <div className={style.header}>
        <header>
        <div className={style.container}>
          <div className={style.logo}>
            <Link to={'home'} smooth={true} duration={500}>
              <img src={logo} alt="logo"/>
            </Link>
          </div>

          <div className={style.wrapperList}>
            <nav>
              <HeaderItems></HeaderItems>
            </nav>
          </div>

          <div className={style.hamburger}>
            <Hamburger></Hamburger>
          </div>
          <NavLink to={'cart'}>
            <div className={style.cart}>
              <img src={cart} alt={'cart'}/>
              <p>Cart Item</p>
              <p>{dataOrderCart ? dataOrderCart.length : 0}</p>
            </div>
          </NavLink>

        </div>
        </header>
      </div>
    </>
  )
}
export default Header;