import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

function Layout(params) {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
}

export default Layout;
