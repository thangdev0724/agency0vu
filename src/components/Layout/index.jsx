import { useEffect } from "react";
import MessengerContact from "../Messenger";
import Footer from "./Footer";
import Header from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
function MainLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    document.querySelector("#navbar-dropdown").classList.add("hidden");
  }, [pathname]);

  return (
    <div className="mainLayout">
      <Header />
      <Outlet />
      <Footer />
      <MessengerContact />
    </div>
  );
}

export default MainLayout;
