import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import Navbar from "./User/Components/Navbar.jsx";
import Home from "./User/Pages/Home.jsx";
import MyOrders from "./User/Pages/MyOrders.jsx";
import Cart from "./User/Pages/Cart.jsx";
import RestaurantMenu from "./User/Pages/RestaurantMenu.jsx";

import LoginPage from './User/AuthPages/Login.jsx'
import SignupPage from './User/AuthPages/Signup.jsx'

function Layout() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="myorders" element={<MyOrders />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/restaurant/:id" element={<><Navbar /><RestaurantMenu /></>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
