import { Outlet } from "react-router-dom";
import BottomNavbar from "../../components/navs/bottom.component";
import Header from "../../components/navs/header.component";

const Navigation = () => {
  return (
    <>
      <Header />
      <Outlet />
      <BottomNavbar />
    </>
  );
};

export default Navigation;
