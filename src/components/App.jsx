import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import ShopPage from "../pages/ShopPage/ShopPage";
import CartPage from "../pages/CartPage/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >    
      <Route index element={<ShopPage />} />
      <Route path="/shoppingCart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
