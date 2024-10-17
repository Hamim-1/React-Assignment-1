import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
const MainNavbar = () => {
    const location = useLocation();
    const [isMobile, setIsmobile] = useState(false);
    const navItems = [
        { name: 'Dashboard', path: '/' },
        { name: 'Incidents', path: '/incidents' },
        { name: 'Locations', path: '/locations' },
        { name: 'Activities', path: '/activities' },
        { name: 'Documents', path: '/documents' },
        { name: 'Cypher AI', path: '/cypher-ai' },
    ];
    return (
        <div className='bg-background'>
            <div className="container flex justify-between items-center text-custom">
                <img src="/logo.png" alt="" className='w-28 xs:w-32' />


                <nav className='lg:flex space-x-8 text-sm hidden relative'>
                    {navItems.map((item) => (
                        <div key={item.name} className="relative">
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? 'font-bold text-black' : 'text-secondary'
                                }
                            >
                                {item.name}
                            </NavLink>
                            {/* Conditional Underline */}
                            <p className={`absolute left-0 -bottom-[35px] w-full h-1 ${item.path === window.location.pathname ? 'bg-black' : 'bg-transparent'} transition-all duration-300`} />
                        </div>
                    ))}
                </nav>

                <div className='flex space-x-2 xs:space-x-5 items-center'>
                    <div className='flex justify-center items-center bg-white w-10 h-10 rounded-full relative'>
                        <img src="/bell.png" alt="" />
                        <p className='absolute top-0 right-0 h-2.5 w-2.5 bg-[#4ADE80] rounded-full'></p>
                    </div>

                    <div className='flex space-x-2 items-center'>
                        <img src="/profilePic.png" alt="" />
                        <div className='flex flex-col'>
                            <p className='text-base font-semibold'>Usman Zafar</p>
                            <p className='text-sm'>usmanzafar@gmail.com</p>
                        </div>
                    </div>

                    <svg onClick={() => setIsmobile(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 lg:hidden cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>

                </div>
            </div>

            <div className={`absolute top-0 ${isMobile ? 'left-0' : '-left-full'} transition-all duration-500 w-full h-screen bg-black/80 p-5 z-20`}>
                <nav className='flex flex-col space-y-5 text-sm  relative'>
                    {navItems.map((item) => (
                        <div key={item.name} className="relative w-fit">
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? 'font-bold text-primary' : 'text-white'
                                }
                            >
                                {item.name}
                            </NavLink>
                            {/* Conditional Underline */}
                            <p className={`absolute left-0 -bottom-1 w-full h-1 ${item.path === window.location.pathname ? 'bg-primary' : 'bg-transparent'} transition-all duration-300`} />
                        </div>
                    ))}
                </nav>
                <svg onClick={() => setIsmobile(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6 text-white absolute top-5 right-5 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </div>

            <div className='border-t h-0.5 w-full bg-[#E4E4E7] mt-5 hidden lg:block'>

            </div>
        </div>
    );
};

export default MainNavbar;