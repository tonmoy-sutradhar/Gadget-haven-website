import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="h-16">
        <Navbar></Navbar>
      </div>

      {/* Dynamic section */}
      <div className="min-h-[calc(100vh-292px)] py-12 container mx-auto px-11">
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
