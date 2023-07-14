import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createHashRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import VidNoteProject from "./pages/VidNoteProject/VidNoteProject";
import Resume from "./pages/Resume/Resume";
import ProyectoProject from "./pages/ProyectoProject/ProyectoProject";
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "projects",
                element: <ProjectPage />,
                children: [
                    {
                        path: "vidnote",
                        element: <VidNoteProject />,
                    },
                    {
                        path: "proyecto",
                        element: <ProyectoProject />,
                    },
                ],
            },
            {
                path: "landing",
                element: <LandingPage />,
            },
            { path: "resume", element: <Resume /> },
        ],
    },
]);
root.render(
    <HomePage />
    // <React.StrictMode>
    //     <RouterProvider router={router} />
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
