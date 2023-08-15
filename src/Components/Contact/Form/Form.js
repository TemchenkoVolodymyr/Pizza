import React from 'react';
import { Field, reduxForm } from 'redux-form'
import style from './Form.module.scss'




let Form = (props) => {


  const {onSubmit, isSucceed} = props

  return (
    <form onSubmit={onSubmit} className={style.container}>
      <div >
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input"/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <Field name="message" component="input" type="text" />
      </div>

        <button type="submit">Send</button>
      {isSucceed ?  <p className={style.succeed}>Succeed.We have got your message and will contact with for a short time</p> : null }


    </form>
  );
};

Form = reduxForm({
  form:'contact'
})(Form)

export default Form;