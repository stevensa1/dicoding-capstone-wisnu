import React from 'react';
import Sidebar from '../../components/Sidebar';
import NavigationBar from '../../components/NavigationBar';
import CustomBox from '../../components/CustomBox';

function AturAksesMitra() {
    return (
        <>
            <div className='flex h-full '>
                <Sidebar activeMenu='Atur Akses Mitra' />
                <div class='w-full p-6 bg-red-50 flex-col justify-start items-start gap-6 inline-flex'>
                    <NavigationBar activeMenu='Atur Akses Mitra' />
                </div>
            </div>
        </>
    );
}

export default AturAksesMitra;
