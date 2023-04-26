import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
} from "react-router-dom";
import SharedLayout from "../modules/SharedLayout";
import SharedAccount from "../modules/SharedAccount";
import Market from "../pages/Markets";
import Products from "../pages/Products";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import Contact from "../pages/Contact";
import WishList from "../pages/WishList";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="markets" element={<Market />} />
      <Route path="products" element={<Products />} />
      <Route path="product/:id" element={<ProductDetail />} />
      <Route path="contact" element={<Contact />} />
      <Route path="wishlist" element={<WishList />} />
      <Route path="account" element={<SharedAccount />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export default router;
