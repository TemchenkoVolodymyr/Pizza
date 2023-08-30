import React from 'react';
import {Link} from "react-scroll";

const HeaderItems = () => {
  return (
   <>
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
   </>
  );
};

export default HeaderItems;