import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IconPlus, IconSearch } from '../Icons';

const SecondaryNavbar = () => {
    const [currentPath, setCurrentPath] = useState('/');
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
                    {currentPath === '/'
                        ?
                        'Welcome back'
                        :
                        'Home - Incidents'
                    }
                </p>
                <h2 className='text-2xl font-bold'>
                    {currentPath === '/'
                        ?
                        'Dashboard'
                        :
                        'Incidents'
                    }
                </h2>
            </div>

            <div className='flex space-x-2 sm:space-x-5 text-xs text-secondary'>
                <button className="flex items-center space-x-2 bg-white border-[#FAFAFA] rounded-md py-3 px-3 xs:px-7">
                    <IconSearch size={16} />
                    <span>Search incident</span>
                </button>
                <button className="bg-white border-[#FAFAFA] rounded-md py-3 px-3 xs:px-7">Sort By: Date modified</button>

                {
                    currentPath === '/' ?
                        <button className="primary-button">Cypher AI</button> :
                        <button className="primary-button flex items-center space-x-2"> <IconPlus size={16} />  <span>New Incident</span> </button>
                }
            </div>

        </div>
    );
};

export default SecondaryNavbar;