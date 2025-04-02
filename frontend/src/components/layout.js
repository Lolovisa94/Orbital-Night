import React from 'react';
import Footer from './footer';
import Header from './header';
import { Container } from '@mui/material';

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <main className="flex-1 p-4 flex justify-center items-center">
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;