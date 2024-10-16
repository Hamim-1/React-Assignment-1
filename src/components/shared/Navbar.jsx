import React from 'react';
import MainNavbar from './MainNavbar';
import SecondaryNavbar from './SecondaryNavbar';

const Navbar = () => {
    return (
        <div className='bg-background py-5 flex flex-col space-y-10'>
            <MainNavbar />

            <SecondaryNavbar />
        </div>
    );
};

export default Navbar;