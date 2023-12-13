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

    const BoxWithImage = ({ title, imageUrl }) => {
        return (
          <div className="flex p-4 border">
            {/* Bagian Kiri (Judul) */}
            <div className="flex-shrink-0">
              <h2 className="text-lg font-bold">{title}</h2>
            </div>
      
            {/* Bagian Kanan (Gambar) */}
            <div className="ml-4">
              <img src={imageUrl} alt="Gambar" className="w-16 h-16 object-cover" />
            </div>
          </div>
        );
      };
      
    const BoxLinks = () => {
        return (
          <div className="text-red-500 hover:text-red-700 p-4">
            <a href="#" className="text-red-500 hover:text-red-700 block mb-2">Register Situs Wisata</a>
            <a href="#" className="text-red-500 hover:text-red-700 block mb-2">Atur Status Situs Wisata</a>
            <a href="#" className="text-red-500 hover:text-red-700 block mb-2">Kelola Tiket Situs Wisata</a>
            <a href="#" className="text-red-500 hover:text-red-700 block mb-2">Kelola Kode Promo</a>
            <a href="#" className="text-red-500 hover:text-red-700 block mb-2">Push Notifikasi Wisata</a>
            <a href="#" className="text-red-500 hover:text-red-700 block mb-2">Push Notifikasi Pembeli</a>
            <a href="#" className="text-red-500 hover:text-red-700 block mb-2">Hapus Situs Wisata</a>
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
                        <div class='flex gap-5 w-full h-28 md:h-32 p-4 rounded-xl justify-between items-start'>
                            <div class='w-2/3 w-full' >
                                <CustomBox title='Daftar Situs Wisata'>
                                        
                                </CustomBox>    
                            </div >
                            <div class='w-1/3 font-poppins font-light'>
                                <CustomBox title='Kelola Wisata'>
                                    <BoxLinks />
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
