import { Outlet } from "react-router-dom";
import BottomNavbar from "../../components/navs/bottom.component";
import Header from "../../components/navs/header.component";

const Navigation = () => {
  return (
    <div className="ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-neutral-100 dark:divide-neutral-800">
      <Header />
      <Outlet />
      <BottomNavbar />
    </div>
  );
};

export default Navigation;
