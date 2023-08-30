import React, {useState} from 'react';
import Form from "./Form/Form";
import style from './ContactUs.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {contactFormRequest} from "../../ApiRequest/ApiRequest";

const ContactUs = () => {

  const [isSucceed, setIsSucceed] = useState(false)

  const dataForm = useSelector((state) => state.form)
  const dispatch = useDispatch()

  const submitForm = (e) => {
    e.preventDefault()
    dispatch(contactFormRequest.submitForm(dataForm, setIsSucceed))
  }


  return (
    <div className={style.container}>
      <section className={style.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6160691.999439026!2d12.689520526730602!3d41.065705190063284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f78747303fdf7%3A0xbc5401d7dff36a16!2sRistorante%20Sibilla!5e0!3m2!1sru!2sit!4v1692024192782!5m2!1sru!2sit"
          width="900" height="750" style={{border: 0}} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
      <div className={style.form}>
        <section>
        <h1>Contact Us</h1>
        <Form onSubmit={submitForm} isSucceed={isSucceed}></Form>
        </section>
      </div>

    </div>
  );
};

export default ContactUs;