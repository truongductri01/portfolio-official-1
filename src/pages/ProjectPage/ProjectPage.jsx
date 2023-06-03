import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../../components/Navbar/NavBar'
import Footer from '../../components/Footer/Footer'

function ProjectPage() {
    return (
        <div className='py-10'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default ProjectPage