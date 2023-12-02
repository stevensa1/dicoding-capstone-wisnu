import React from 'react';
// import { navigationList } from './../data/navItem';

function NavigationBar({ activeMenu = 'Dashboard' }) {
    return (
        <>
            <div class='self-stretch justify-between items-center inline-flex'>
                <div class='text-zinc-800 text-3xl font-bold font-poppins'>
                    {activeMenu}
                </div>
                <div class='justify-start items-center gap-6 flex'>
                    <div class='flex-col justify-center items-end inline-flex'>
                        <div class='text-red-900 text-lg font-semibold font-poppins'>
                            Nama Pengguna
                        </div>
                        <div class='text-red-900 font-sm font-poppins tracking-tight'>
                            Nama Mitra
                        </div>
                    </div>
                    <div class='w-12 h-12 bg-zinc-800 rounded-full'></div>
                </div>
            </div>
        </>
    );
}

export default NavigationBar;
