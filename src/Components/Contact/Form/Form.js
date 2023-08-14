import React from 'react';
import { Field, reduxForm } from 'redux-form'
import style from './Form.module.scss'




let Form = (props) => {

  const {onSubmit} = props

  return (
    <form onSubmit={onSubmit} className={style.container}>
      <div >
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input"/>
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Message</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

Form = reduxForm({
  form:'contact'
})(Form)

export default Form;