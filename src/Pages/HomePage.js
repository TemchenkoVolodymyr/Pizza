import HomeSlider from "../Components/HomeSlider/HomeSlider";
import Menu from "../Components/Menu/Menu";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {homePageAC} from "../Redux/HomePage/homePageAC";
import OtherProduct from "../Components/OtherProduct/OtherProduct";
import AboutUs from "../Components/AboutUs/AboutUs";
import HistoryOfRestaurant from "../Components/AboutUs/HistoryOfRestaurant";


const HomePage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/pizza`).then(res => dispatch(homePageAC(res.data.data.result)))
  },[])


  return(
    <>
      <HomeSlider></HomeSlider>
      <Menu></Menu>
      <AboutUs></AboutUs>
      <HistoryOfRestaurant></HistoryOfRestaurant>

    </>
  )
}
export default HomePage;