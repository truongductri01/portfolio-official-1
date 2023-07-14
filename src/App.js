import React from "react";
// import NavBar from "./components/Navbar/NavBar";
import { Outlet, useLocation } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ScrollBackTop from "./components/ScrollBackTop/ScrollBackTop";

function App() {
    const location = useLocation();
    console.log(location.pathname);
    // let isHomePage = location.pathname === "/";
    return (
        <>
            <ScrollBackTop />
            <ScrollToTop />
            <div className="App h-screen w-screen max-w-full max-h-full overflow-hidden">
                <Outlet />
            </div>
        </>
    );
}

export default App;
