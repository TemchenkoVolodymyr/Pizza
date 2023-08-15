import HomeSlider from "../Components/HomeSlider/HomeSlider";
import Menu from "../Components/Menu/Menu";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {homePageAC} from "../Redux/HomePage/homePageAC";
import OtherProduct from "../Components/OtherProduct/OtherProduct";
import AboutUs from "../Components/AboutUs/AboutUs";
import HistoryOfRestaurant from "../Components/AboutUs/HistoryOfRestaurant";
import BlogSection from "../Components/BlogSection/BlogSection";
import RestaurantStuff from "../Components/AboutUs/RestaurantStuff/RestaurantStuff";
import ContactUs from "../Components/Contact/ContactUs";
import FooterContact from "../Components/FooterContact/FooterContact";


export const getPizzas = (dispatch) => {
  axios.get(`http://localhost:3000/api/v1/pizza`).then(res => dispatch(homePageAC(res.data.data.result)))
}

const HomePage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    // axios.get(`http://localhost:3000/api/v1/pizza`).then(res => dispatch(homePageAC(res.data.data.result)))
    getPizzas(dispatch)
  }, [])


  return (
    <>
      <section id="home">
        <HomeSlider></HomeSlider>
      </section>
      <section id='menu'>
      <Menu></Menu>

      </section>
      <section id={'about'}>
      <AboutUs></AboutUs>

      </section>
      <section>
      <HistoryOfRestaurant></HistoryOfRestaurant>

      </section>
      <section id={'blog'}>
      <BlogSection></BlogSection>

      </section>
      <section id={'services'}>
      <RestaurantStuff></RestaurantStuff>

      </section>
      <section id={"contact"}>
      <ContactUs></ContactUs>

      </section>
      <section >
      <FooterContact></FooterContact>

      </section>
    </>
  )
}
export default HomePage;