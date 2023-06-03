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
            <div className="App min-h-screen max-w-screen px-4 md:px-16">
                <Outlet />
            </div>
        </>
    );
}

export default App;
