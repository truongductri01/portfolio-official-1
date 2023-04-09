import React from "react";
import NavBar from "./components/Navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ScrollBackTop from "./components/ScrollBackTop/ScrollBackTop";

function App() {
    return (
        <>
            <ScrollBackTop />
            <ScrollToTop />
            <div className="App px-4 py-5 scrollbar-hide md:px-16">
                <NavBar />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}

export default App;
