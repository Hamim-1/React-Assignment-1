import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { IconX } from '../Icons';

const IncidentNavbar = () => {
    const [currentPath, setCurrentPath] = useState('/dashboard');
    const location = useLocation();
    let renderedContent;
    useEffect(() => {
        setCurrentPath(location.pathname);

    }, [location.pathname])
    return (
        <div className='container flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-between items-center'>

            <div className='flex space-x-5 items-center'>



                <div className='flex justify-center items-center bg-white size-10 rounded-full'>
                    <IconX size={20} color='gray' />
                </div>

                <div className='flex flex-col items-center sm:items-start space-y-2'>
                    <p className='text-secondary text-xs'>
                        Home - Incidents - New Incident
                    </p>
                    <h2 className='text-2xl font-bold'>
                        New Incident
                    </h2>
                </div>
            </div>

            <div className='flex space-x-2 sm:space-x-5 text-xs text-secondary'>
                <button className="bg-white border-[#FAFAFA] rounded-md py-3 px-3 xs:px-7">Back</button>

                <button className="primary-button">Next step</button>
            </div>

        </div>
    );
};

export default IncidentNavbar;