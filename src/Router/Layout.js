import React from 'react';
import {Outlet} from "react-router-dom";
import style from './Layout.module.scss'
import Header from "../Components/Header/Header";
import CartHeader from "../Pages/CartPage/CartHeader/CartHeader";

const Layout = () => {


  return (
    <>
      <header>
        {/*<Header/>*/}
      </header>

      <main style={{height:"100%"}}>
        <Outlet/>
      </main>

    </>
  );
};

export default Layout;