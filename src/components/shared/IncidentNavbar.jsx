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
        <div className='container flex flex-col xs:flex-row space-y-10 xs:space-y-0 justify-between items-center relative'>

            <div className='flex w-full xs:w-fit flex-row-reverse xs:flex-row justify-between xs:justify-start  space-x-5 items-center'>

                <div className='flex justify-center items-center bg-white size-10 rounded-full cursor-pointer'>
                    <IconX size={20} color='gray' />
                </div>

                <div className='flex flex-col sm:items-start space-y-2'>
                    <p className='text-secondary text-xs'>
                        Home - Incidents - New Incident
                    </p>
                    <h2 className='text-2xl font-bold'>
                        New Incident
                    </h2>
                </div>
            </div>

            <div className='w-4/5 lg:w-[527px] h-1 bg-[#E5E7EB] rounded-md absolute left-1/2 -translate-x-1/2 top-8 xs:-top-5 lg:top-1/2 lg:-translate-y-1/2'>
                <div className='w-1/5 h-1 bg-primary rounded-md'>

                </div>
            </div>

            <div className='flex space-x-5 text-xs text-secondary'>
                <button className="bg-white border-[#FAFAFA] rounded-md py-3 px-7">Back</button>

                <button className="primary-button">Next step</button>
            </div>

        </div>
    );
};

export default IncidentNavbar;