import React from 'react';
import Sidebar from '../../components/Sidebar';
import NavigationBar from '../../components/NavigationBar';
import CustomBox from '../../components/CustomBox';

function analitikaDanStatistika() {
    return (
        <>
            <div className='flex h-full '>
                <Sidebar activeMenu='Analitika dan Statistika' />
                <div class='w-full p-6 bg-red-50 flex-col justify-start items-start gap-6 inline-flex'>
                    <NavigationBar activeMenu='Analitika dan Statistika' />
                </div>
            </div>
        </>
    );
}

export default analitikaDanStatistika;
