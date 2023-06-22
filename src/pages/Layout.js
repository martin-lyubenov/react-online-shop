import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";
import MainContainer from "../UI/MainContainer";

import classes from "./Layout.module.css";
import Banner from "../components/Banner";

function Layout(params) {
  return (
    <div className={classes["banner-container"]}>
      <MainNav />
      <Banner />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </div>
  );
}

export default Layout;
