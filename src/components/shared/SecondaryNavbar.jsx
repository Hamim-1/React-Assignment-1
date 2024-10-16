import React from 'react';

const SecondaryNavbar = () => {
    return (
        <div className='container flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-between items-center'>
            <div className='flex flex-col items-center sm:items-start space-y-2'>
                <p className='text-secondary text-xs'>Welcome back</p>
                <h2 className='text-2xl font-bold'>Dashboard</h2>
            </div>

            <div className='flex space-x-2 sm:space-x-5 text-xs text-secondary'>
                <button className="flex items-center space-x-2 bg-white border-[#FAFAFA] rounded-md py-3 px-3 xs:px-7">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <span>Search incident</span>
                </button>
                <button className="bg-white border-[#FAFAFA] rounded-md py-3 px-3 xs:px-7">Sort By: Date modified</button>
                <button className="primary-button">Cypher AI</button>
            </div>

        </div>
    );
};

export default SecondaryNavbar;