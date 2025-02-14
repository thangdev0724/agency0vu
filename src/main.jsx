import "@/assets/css/index.css";
import MainLayout from "@/components/Layout";
import { store } from "@/store";
import AboutUsPage from "@/views/pages/AboutUs";
import ContactUsPage from "@/views/pages/ContactUs";
import FacebookRentalPage from "@/views/pages/FBRental";
import HomePage from "@/views/pages/Home";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./views/pages/404/PageNotFound";
import ProductAdminPage from "./views/pages/Admin/Product";
import BlogPage from "./views/pages/Blog";
import MgtBlog from "./views/pages/Admin/MgtBlog";
import DetailBlog from "./views/pages/Blog/DetailBlog";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:blogId" element={<DetailBlog />} />
          <Route
            path="/blog/:blogId/edit"
            element={<MgtBlog typeAction="edit" />}
          />

          {/* <Route path="/buy-accounts" element={<BuyAccountPage />} /> */}
          {/* <Route path="/our-service" element={<BuyAccountPage />} /> */}
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/facebook-service" element={<FacebookRentalPage />} />
          {/* <Route path="/tiktok-service" element={<TiktokServicePage />} /> */}
          {/* <Route path="/cart" element={<CartPage />} /> */}
          {/* <Route path="/cart/checkout" element={<CheckoutPage />} /> */}
          <Route path="/admin/product" element={<ProductAdminPage />} />
          <Route path="/admin/blog" element={<MgtBlog />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
