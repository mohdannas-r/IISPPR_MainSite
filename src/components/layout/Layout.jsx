import React from 'react'
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <>
            <header>
                {/* Add your header content here */}

            </header>
            <main>
                <Outlet />
            </main>
            <footer>

                {/* Add your footer content here */}
            </footer>
        </>
    );
};


export default Layout