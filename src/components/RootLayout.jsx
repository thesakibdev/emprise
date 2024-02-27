import { Outlet } from "react-router-dom";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
