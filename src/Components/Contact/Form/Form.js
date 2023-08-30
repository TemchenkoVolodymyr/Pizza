import React from 'react';
import {reduxForm} from 'redux-form'
import style from './Form.module.scss'
import FormField from "./FormField/FormField";


let Form = (props) => {


  const {onSubmit, isSucceed} = props

  return (
    <form onSubmit={onSubmit} className={style.container}>
      <FormField label={'firstName'} title={"First Name"} type={'text'}></FormField>
      <FormField label={'email'} title={"Email"} type={'email'}></FormField>
      <FormField label={'message'} title={"Message"} type={'text'}></FormField>

      <button type="submit">Send</button>
      {isSucceed ?
        <p className={style.succeed}>Succeed.We have got your message and will contact with for a short time</p> : null}
    </form>
  );
};

Form = reduxForm({
  form: 'contact'
})(Form)

export default Form;