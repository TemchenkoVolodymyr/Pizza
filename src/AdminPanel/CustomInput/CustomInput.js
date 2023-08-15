import React from "react";


const CustomInput = (props) => {
  const {value,changeValue,name ,type} = props
  return(
    <>
      <div>
        <label>{name}</label>
        <input type={type} value={value} onChange={(e) => changeValue(e.target.value)}/>
      </div>
    </>
  )
}

export default CustomInput