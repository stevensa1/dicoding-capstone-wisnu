import React from 'react';
import { Bar } from 'react-chartjs-2';
import Sidebar from '../../components/Sidebar';
import NavigationBar from '../../components/NavigationBar';
import CustomBox from '../../components/CustomBox';

function KelolaSitusWisata() {
    const siteStats = [
        {
            name: 'Situs Wisata Terdaftar',
            value: '10',
            backgroundColor: '#FFF2F1',
        },
        {
            name: 'Situs Wisata Aktif',
            value: '7',
            backgroundColor: '#5FFF82',
        },
        {
            name: 'Situs Wisata Nonaktif',
            value: '3',
            backgroundColor: '#C7C7C7',
        },
        {
            name: 'Situs Wisata Perlu Perhatian',
            value: '3',
            backgroundColor: '#FC2A1F',
        },
    ];

    const StatisticBox = ({ name, value }) => {
        return (
            <div className='flex w-full h-28 md:h-32 p-4 bg-red-300 rounded-xl flex-col justify-between items-start'>
                <div className='self-stretch text-black text-sm md:text-md font-semibold font-poppins'>
                    {name}
                </div>
                <div className='self-stretch justify-between items-center flex'>
                    <div className='text-black text-md md:text-xl font-bold font-poppins'>
                        {value}
                    </div>
                    <div className='w-9 h-9 bg-red-950 rounded-full'></div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className='flex h-full '>
                <Sidebar activeMenu='Kelola Situs Wisata' />
                <div class='w-full p-6 bg-red-50 flex-col justify-start items-start gap-6 inline-flex'>
                    <NavigationBar activeMenu='Kelola Situs Wisata' />
                    <div class='self-stretch grow shrink basis-0 flex-col justify-start items-start gap-5 flex'>
                        <div class='flex w-full'>
                            <div class='flex flex-wrap md:flex-nowrap w-full shrink-0 justify-between items-center gap-5'>
                                {siteStats.map((stat, index) => (

                                   <StatisticBox
                                        key={index}
                                        name={stat.name}
                                        value={stat.value}
                                    />
                                ))}
                            </div>
                        </div>
                        <div class='flex gap-5'>
                            <div>
                                <CustomBox title='Daftar Situs Wisata'>
                                        
                                </CustomBox>    
                            </div>
                            <div>
                                <CustomBox title='Kelola Wisata'>
                                        
                                </CustomBox>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default KelolaSitusWisata;
