import { Outlet } from "react-router-dom";
import Nav from "../components/ui/Nav"
import Footer from "../components/ui/Footer"

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
