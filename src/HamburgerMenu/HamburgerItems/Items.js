import React from 'react';
import {Link} from "react-scroll";

const Items = (props) => {

  const {position,title,callback} = props
  return (
    <Link to={position} smooth={true} duration={500}>
      <li onClick={callback}>{title}</li>
    </Link>
  );
};

export default Items;