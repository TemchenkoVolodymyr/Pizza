import React from 'react';
import {Outlet} from "react-router-dom";
import style from './Layout.module.scss'

const Layout = () => {


  return (
    <>
      <header>

      </header>

        <main >
          <Outlet/>
        </main>

    </>
  );
};

export default Layout;