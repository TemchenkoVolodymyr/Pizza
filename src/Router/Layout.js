import React from 'react';
import {Outlet} from "react-router-dom";
import style from './Layout.module.scss'
import Header from "../Components/Header/Header";

const Layout = () => {


  return (
    <>
      <header>
        <Header/>
      </header>

      <main>
        <Outlet/>
      </main>

    </>
  );
};

export default Layout;