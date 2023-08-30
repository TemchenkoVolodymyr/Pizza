import React from 'react';
import {Field} from "redux-form";

const FormField = ({type,label,title}) => {
  return (
    <>
      <div>
        <label htmlFor={label}>{title}</label>
        <Field name={label} component="input" type={type}/>
      </div>
    </>
  );
};

export default FormField;