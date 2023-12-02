import React from 'react';
import { navigationList } from '../data/navItem';

function Sidebar({ activeMenu = 'Dashboard' }) {
    return (
        <>
            <div className='flex p-6 h-min-screen flex-col bg-red-orange-950 w-80 gap-5 text-red-orange-200 justify-between'>
                <div className='flex flex-col gap-5'>
                    <div className='text-center text-red-orange-400'>
                        <div className='text-2xl font-bold'>WisNu</div>
                        <div className='uppercase font-semibold tracking-widest'>
                            Partner
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        {navigationList.map((item, index) => (
                            <div
                                key={index}
                                className={`flex cursor-pointer items-center p-4 rounded-lg ${
                                    activeMenu === item.name
                                        ? 'bg-red-orange-100 text-red-orange-950'
                                        : 'hover:bg-red-orange-800 transition duration-200'
                                }`}
                            >
                                <div>
                                    <i className='material-icons'>
                                        {item.icon}
                                    </i>
                                </div>
                                <div className='ml-4'>{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div
                        className={`flex cursor-pointer items-center p-4 rounded-lg hover:bg-red-orange-800 transition duration-200`}
                    >
                        <div>
                            <i className='material-icons'>[]</i>
                        </div>
                        <div className='ml-4'>Pengaturan Akun</div>
                    </div>
                    <div
                        className={`flex cursor-pointer items-center p-4 rounded-lg hover:bg-red-orange-800 transition duration-200`}
                    >
                        <div>
                            <i className='material-icons'>[]</i>
                        </div>
                        <div className='ml-4'>Keluar</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
