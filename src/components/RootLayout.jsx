import { Outlet } from "react-router-dom";
import NavBar from "./Layout/NavBar";

const RootLayout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <div>Footer</div>
    </>
  );
};

export default RootLayout;
