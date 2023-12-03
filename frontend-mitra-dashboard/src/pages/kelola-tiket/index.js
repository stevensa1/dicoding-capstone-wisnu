import React from 'react';
import Sidebar from '../../components/Sidebar';
import NavigationBar from '../../components/NavigationBar';
import CustomBox from '../../components/CustomBox';

function KelolaTiket() {
    return (
        <>
            <div className='flex h-full '>
                <Sidebar activeMenu='Kelola Tiket' />
                <div class='w-full p-6 bg-red-50 flex-col justify-start items-start gap-6 inline-flex'>
                    <NavigationBar activeMenu='Kelola Tiket' />
                </div>
            </div>
        </>
    );
}

export default KelolaTiket;
