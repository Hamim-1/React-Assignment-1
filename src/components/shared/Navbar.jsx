import React, { useEffect, useState } from 'react';
import MainNavbar from './MainNavbar';
import SecondaryNavbar from './SecondaryNavbar';
import { useLocation } from 'react-router-dom';
import IncidentNavbar from './IncidentNavbar';

const Navbar = () => {
    const [currentPath, setCurrentPath] = useState('/');
    const location = useLocation();
    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location]);

    return (
        <div className='bg-background py-5 flex flex-col space-y-10'>
            <MainNavbar />

            {
                (currentPath === '/dashboard' || currentPath === '/incidents') || currentPath === '/locations'
                    ?
                    <SecondaryNavbar />
                    : currentPath === '/incidents/step1'
                        ? console.log()

                        : currentPath.startsWith('/incidents') &&
                        < IncidentNavbar />
            }
        </div>
    );
};

export default Navbar;