import React from 'react';
import { navigationList } from './../data/navItem';

function NavigationBar({ activeMenu = 'Dashboard' }) {
    return (
        <>
            <div class='self-stretch justify-between items-center inline-flex'>
                <div class='text-zinc-800 text-3xl font-semibold font-poppins'>
                    {navigationList[0].name}
                </div>
                <div class='justify-start items-center gap-6 flex'>
                    <div class='flex-col justify-center items-end inline-flex'>
                        <div class='text-red-900 text-xl font-semibold font-poppins'>
                            Nama Pengguna
                        </div>
                        <div class='text-red-900 font-normal font-poppins tracking-tight'>
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
