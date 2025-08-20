import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductDetails from "../pages/ProductDetails";
import Dashboard from "../pages/Dashboard"
import ViewAll from "../pages/ViewAll"
import Layout from "../layouts/layout";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/viewall" element={<ViewAll />} />
        <Route path="/viewall/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
} 
