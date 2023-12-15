import React from 'react';
import Sidebar from '../../components/Sidebar';
import NavigationBar from '../../components/NavigationBar';
import CustomBox from '../../components/CustomBox';

function PesanDanNotifikasi() {
    return (
        <>
            <div className='flex h-full '>
                <Sidebar activeMenu='Pesan dan Notifikasi' />
                <div class='w-full p-6 bg-red-50 flex-col justify-start items-start gap-6 inline-flex'>
                    <NavigationBar activeMenu='Pesan dan Notifikasi' />
                    
                    {/* Div pertama yang berisi CustomBox */}
                    <div className="my-custom-container">
                        <CustomBox title="Pesan dan Notifikasi">
                            <p>Ini adalah halaman untuk mengelola pesan dan notifikasi.</p>
                            {/* Tambahkan konten sesuai kebutuhan */}
                        </CustomBox>
                    </div>

                    {/* Div kedua yang berisi CustomBox */}
                    <div className="my-custom-container">
                        <CustomBox title="CustomBox Kedua">
                            <p>Ini adalah halaman untuk konten CustomBox kedua.</p>
                            {/* Tambahkan konten sesuai kebutuhan */}
                        </CustomBox>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PesanDanNotifikasi;
