import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { IconPlus, IconSearch } from '../Icons';

const SecondaryNavbar = () => {
    const [currentPath, setCurrentPath] = useState('/dashboard');
    const location = useLocation();
    let renderedContent;
    useEffect(() => {
        setCurrentPath(location.pathname);

    }, [location.pathname])
    return (
        <div className='container flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-between items-center'>
            <div className='flex flex-col items-center sm:items-start space-y-2'>
                {renderedContent}
                <p className='text-secondary text-xs'>
                    {currentPath === '/dashboard'
                        ?
                        'Welcome back'
                        : currentPath === '/locations' ?
                            'Incidents - DR-4699 March 2023 Severe Storms' :
                            'Home - Incidents'
                    }
                </p>
                <h2 className='text-2xl font-bold'>
                    {currentPath === '/dashboard'
                        ?
                        'Dashboard'
                        : currentPath === '/locations' ?
                            <div className='flex items-start xs:items-center space-x-2'> <img src="/tree-icon.png" alt="" /> <span className='text-center text-lg lg:text-2xl'>DR-4699 March 2023 Severe Storms</span></div> :
                            'Incidents'
                    }
                </h2>
            </div>

            <div className='flex flex-col xs:flex-row space-y-5 xs:space-y-0 xs:space-x-5 text-xs text-secondary'>

                <button className="flex items-center space-x-2 bg-white border-[#FAFAFA] rounded-md py-3 px-3 xs:px-7">
                    <IconSearch size={16} />
                    <span>Search incident</span>
                </button>

                <button className="bg-white border-[#FAFAFA] rounded-md py-3 px-3 xs:px-7">Sort By: Date modified</button>

                {
                    currentPath === '/dashboard' ?

                        <button className="primary-button">Cypher AI</button> :
                        currentPath === '/locations' ?

                            <button className="primary-button flex items-center space-x-2"> <IconPlus size={16} />
                                <span>New Location</span>
                            </button> :

                            <Link to={'incidents/step1'}>
                                <button className="primary-button flex items-center space-x-2"> <IconPlus size={16} />
                                    <span>New Incident</span>
                                </button>
                            </Link>
                }
            </div>

        </div>
    );
};

export default SecondaryNavbar;