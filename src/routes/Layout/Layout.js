import { Outlet } from 'react-router-dom';
import React from 'react';


import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Layout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);

export default Layout;
