import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";
import MainContainer from "../components/UI/MainContainer";

function Layout(params) {
  return (
    <>
      <MainNav />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
}

export default Layout;
