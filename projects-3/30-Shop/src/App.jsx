import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Shop } from "./pages/Shop";
import { ShopCategory } from "./pages/ShopCategory";
import { Product } from "./pages/Product";
import { Card } from "./pages/Card";
import mern_banner from "./components/Assets/banner_mens.png";
import women_banner from "./components/Assets/banner_women.png";
import kids_banner from "./components/Assets/banner_kids.png";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ShopContextProvider from "./context/ShopContext";


const App = () => {
  return (
    <Provider store={store}>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Shop></Shop>}></Route>

            <Route
              path="/mens"
              element={
                <ShopCategory
                  category="men"
                  banner={mern_banner}
                ></ShopCategory>
              }
            ></Route>

            <Route
              path="/womens"
              element={
                <ShopCategory
                  category="women"
                  banner={women_banner}
                ></ShopCategory>
              }
            ></Route>

            <Route
              path="/kids"
              element={
                <ShopCategory
                  category="kid"
                  banner={kids_banner}
                ></ShopCategory>
              }
            ></Route>

            <Route path="product" element={<Product></Product>}>
              <Route path=":productId" element={<Product></Product>}></Route>
            </Route>

            <Route path="/cart" element={<Card></Card>}></Route>

            <Route path="/login" element={<LoginPage></LoginPage>}></Route>

            <Route
              path="/register"
              element={<RegisterPage></RegisterPage>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </Provider>
  );
};

export default App;
