import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import "./app.scss";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import { useState } from "react";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  const [activePage, setActivePage] = useState("home");
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar activePage={activePage} setActivePage={setActivePage} />
        <Routes>
          <Route path="/" element={<Home setActivePage={setActivePage} />} />
          <Route
            path="/users"
            element={<UserList setActivePage={setActivePage} />}
          />
          <Route
            path="/user/:userid"
            element={<User setActivePage={setActivePage} />}
          />
          <Route
            path="/newUser"
            element={<NewUser setActivePage={setActivePage} />}
          />
          <Route
            path="/products"
            element={<Products setActivePage={setActivePage} />}
          />
          <Route
            path="/product/:productid"
            element={<Product setActivePage={setActivePage} />}
          />
          <Route
            path="/newProduct"
            element={<NewProduct setActivePage={setActivePage} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
