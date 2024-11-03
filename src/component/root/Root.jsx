import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";





const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>

         <div className="mt-[50px]">
          <Footer></Footer>
       </div>
        </div>
    );
};

export default Root;