
import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "../Router/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import CartPage from "../Pages/CartPage/CartPage";

function App() {
  return (
   <>
     <Routes>
       <Route path={'/'} element={<Layout/>}>
         <Route path={'/'} element={<HomePage/>}></Route>
         <Route path={'/cart'} element={<CartPage/>}></Route>
       </Route>
     </Routes>
   </>
  );
}

export default App;

