
import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "../Router/Layout";
import HomePage from "../Pages/HomePage";
import OtherProduct from "../Components/OtherProduct/OtherProduct";
import CartPage from "../Pages/CartPage";

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
// <Routes>
//   <Route path={'/'} element={<Layout/>}>
//     <Route path="/profile/:profileId?" element={<ProfileContainer/>}/>
//     <Route path="/dialogs/*" element={<DialogsContainer/>}/>
//     <Route path='/dialogs/:key' element={<CurrentDialog/>} />
//     <Route path="/news" element={<News/>}/>
//     <Route path="/musics" element={<Musics/>}/>
//     <Route path="/settings" element={<Settings/>}/>
//     <Route path="/users" element={<UsersContainer/>}/>
//     <Route path="/login" element={<Login/>}/>
//     <Route path="/friends" element={<ShowAllFriends/>}/>
//   </Route>
// </Routes>
