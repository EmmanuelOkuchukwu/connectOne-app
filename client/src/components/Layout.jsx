import React from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Sidebar />
        </div>
    );
}

export default Layout;
