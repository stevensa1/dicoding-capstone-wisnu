import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationList } from './../data/navItem';

function NavigationBar({ activeMenu = 'Dashboard' }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Navigation Bar */}
            <div className='self-stretch justify-between items-center inline-flex'>
                <div className='text-zinc-800 flex gap-5 text-xl md:text-3xl font-bold font-poppins'>
                    <div
                        className='text-zinc-800 text-xl md:text-3xl font-bold font-poppins cursor-pointer md:hidden'
                        onClick={toggleMobileMenu}
                    >
                        &#9776;
                    </div>
                    {activeMenu}
                </div>

                {/* User Info */}
                <div className='justify-start items-center gap-6 flex'>
                    <div className='flex-col justify-center items-end inline-flex'>
                        <div className='text-red-900 text-md md:text-lg font-semibold font-poppins'>
                            Nama Admin
                        </div>
                        <div className='text-red-900 text-xs md:font-sm font-poppins tracking-tight'>
                            Posisi
                        </div>
                    </div>
                    <div className='w-12 h-12 bg-zinc-800 rounded-full'></div>
                </div>
            </div>

            {/* Mobile Navigation Menu - Hidden by default */}
            {isMobileMenuOpen && (
                <div className='md:hidden'>
                    {/* Navigation List */}
                    <div className='flex flex-col gap-2'>
                        {navigationList.map((item) => (
                            <Link
                                key={item.name}
                                to={item.link}
                                className='text-zinc-800 text-md font-semibold font-poppins'
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default NavigationBar;
