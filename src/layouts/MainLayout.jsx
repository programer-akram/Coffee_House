import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Toaster />
            {/* Navbar */}
                <div className="h-16">
                    <Navbar />
                </div>
            {/* dynamic section */}
                <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto px-12">
                <Outlet />
                </div>
            {/* footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;