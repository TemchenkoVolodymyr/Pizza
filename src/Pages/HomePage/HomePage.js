import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import Menu from "../../Components/Menu/Menu";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import AboutUs from "../../Components/AboutUs/AboutUs";
import HistoryOfRestaurant from "../../Components/AboutUs/HistoryOfRestaurant";
import BlogSection from "../../Components/BlogSection/BlogSection";
import RestaurantStuff from "../../Components/AboutUs/RestaurantStuff/RestaurantStaff/RestaurantStuff";
import ContactUs from "../../Components/Contact/ContactUs";
import FooterContact from "../../Components/FooterContact/FooterContact";
import {getProducts} from "../../ApiRequest/ApiRequest";
import {homePageAC} from "../../Redux/HomePage/homePageAC";



const HomePage = () => {

  const dispatch = useDispatch()

  useEffect(() => {

    getProducts.getPizza().then(res => {
      if(res.status === 200) {
        dispatch(homePageAC(res.data.data.result))
      }
    })

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