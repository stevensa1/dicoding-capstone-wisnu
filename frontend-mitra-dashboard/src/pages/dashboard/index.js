import React from 'react';
import Sidebar from '../../components/Sidebar';
import NavigationBar from '../../components/NavigationBar';

function Dashboard() {
    const siteStats = [
        {
            name: 'Impresi Situs Wisata',
            value: '2.001',
        },
        {
            name: 'Tiket Terjual',
            value: '23',
        },
        {
            name: 'Konversi Penjualan Tiket',
            value: '0.01%',
        },
        {
            name: 'Omzet',
            value: 'Rp2.300.000',
        },
    ];

    const StatisticBox = ({ name, value }) => {
        return (
            <div className='flex w-full h-32 p-4 bg-red-300 rounded-xl flex-col justify-between items-start'>
                <div className='self-stretch text-black font-semibold font-poppins'>
                    {name}
                </div>
                <div className='self-stretch justify-between items-center flex'>
                    <div className='text-black text-xl font-bold font-poppins'>
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
                <Sidebar activeMenu='Dashboard' />
                <div class='w-full p-6 bg-red-50 flex-col justify-start items-start gap-6 inline-flex'>
                    <NavigationBar activeMenu='Dashboard' />
                    <div class='self-stretch grow shrink basis-0 flex-col justify-start items-start gap-5 flex'>
                        <div class='flex w-full'>
                            <div class='flex w-full shrink-0 justify-between items-center gap-5'>
                                {siteStats.map((stat, index) => (
                                    <StatisticBox
                                        key={index}
                                        name={stat.name}
                                        value={stat.value}
                                    />
                                ))}
                            </div>
                        </div>
                        <div class='self-stretch p-6 bg-white rounded-[20px] flex-col justify-start items-start gap-2.5 flex'>
                            <div class='text-black text-2xl font-semibold font-poppins'>
                                Diagram Kunjungan Vs. Tiket Terjual
                            </div>
                            <div class='self-stretch justify-between items-end inline-flex'>
                                <div class='flex-col justify-center items-center gap-2.5 inline-flex'>
                                    <div class='justify-start items-end inline-flex'>
                                        <div class='h-[140px] bg-red-400'></div>
                                        <div class='w-[43px] h-[92px] bg-red-600'></div>
                                    </div>
                                    <div class='flex-col justify-center items-center flex'>
                                        <div class='text-black text-sm font-semibold font-poppins'>
                                            Minggu
                                        </div>
                                        <div class='text-black text-xs font-normal font-poppins tracking-wide'>
                                            26 Nov 2023
                                        </div>
                                    </div>
                                </div>
                                <div class='flex-col justify-center items-center gap-2.5 inline-flex'>
                                    <div class='justify-start items-end inline-flex'>
                                        <div class='w-[43px] h-[104px] bg-red-400'></div>
                                        <div class='w-[43px] h-[35px] bg-red-600'></div>
                                    </div>
                                    <div class='flex-col justify-center items-center flex'>
                                        <div class='text-black text-sm font-semibold font-poppins'>
                                            Senin
                                        </div>
                                        <div class='text-black text-xs font-normal font-poppins tracking-wide'>
                                            27 Nov 2023
                                        </div>
                                    </div>
                                </div>
                                <div class='flex-col justify-center items-center gap-2.5 inline-flex'>
                                    <div class='justify-start items-end inline-flex'>
                                        <div class='w-[43px] h-[197px] bg-red-400'></div>
                                        <div class='w-[43px] h-[34px] bg-red-600'></div>
                                    </div>
                                    <div class='flex-col justify-center items-center flex'>
                                        <div class='text-black text-sm font-semibold font-poppins'>
                                            Selasa
                                        </div>
                                        <div class='text-black text-xs font-normal font-poppins tracking-wide'>
                                            28 Nov 2023
                                        </div>
                                    </div>
                                </div>
                                <div class='flex-col justify-center items-center gap-2.5 inline-flex'>
                                    <div class='justify-start items-end inline-flex'>
                                        <div class='h-[140px] bg-red-400'></div>
                                        <div class='w-[43px] h-[52px] bg-red-600'></div>
                                    </div>
                                    <div class='flex-col justify-center items-center flex'>
                                        <div class='text-black text-sm font-semibold font-poppins'>
                                            Rabu
                                        </div>
                                        <div class='text-black text-xs font-normal font-poppins tracking-wide'>
                                            29 Nov 2023
                                        </div>
                                    </div>
                                </div>
                                <div class='flex-col justify-center items-center gap-2.5 inline-flex'>
                                    <div class='justify-start items-end inline-flex'>
                                        <div class='w-[43px] h-[181px] bg-red-400'></div>
                                        <div class='w-[43px] h-[83px] bg-red-600'></div>
                                    </div>
                                    <div class='flex-col justify-center items-center flex'>
                                        <div class='text-black text-sm font-semibold font-poppins'>
                                            Kamis
                                        </div>
                                        <div class='text-black text-xs font-normal font-poppins tracking-wide'>
                                            30 Nov 2023
                                        </div>
                                    </div>
                                </div>
                                <div class='flex-col justify-center items-center gap-2.5 inline-flex'>
                                    <div class='justify-start items-end inline-flex'>
                                        <div class='h-[140px] bg-red-400'></div>
                                        <div class='w-[43px] h-[92px] bg-red-600'></div>
                                    </div>
                                    <div class='flex-col justify-center items-center flex'>
                                        <div class='text-black text-sm font-semibold font-poppins'>
                                            Jum’at
                                        </div>
                                        <div class='text-black text-xs font-normal font-poppins tracking-wide'>
                                            1 Des 2023
                                        </div>
                                    </div>
                                </div>
                                <div class='flex-col justify-center items-center gap-2.5 inline-flex'>
                                    <div class='justify-start items-end inline-flex'>
                                        <div class='w-[43px] h-[61px] bg-red-400'></div>
                                        <div class='w-[43px] h-[46px] bg-red-600'></div>
                                    </div>
                                    <div class='flex-col justify-center items-center flex'>
                                        <div class='text-black text-sm font-semibold font-poppins'>
                                            Sabtu
                                        </div>
                                        <div class='text-black text-xs font-normal font-poppins tracking-wide'>
                                            2 Des 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='self-stretch h-[358px] p-[25px] bg-white rounded-[20px] flex-col justify-start items-start gap-2.5 flex'>
                            <div class='text-black text-2xl font-semibold font-poppins'>
                                Pembeli Tiket Terbaru
                            </div>
                            <div class='self-stretch h-[262px] flex-col justify-start items-start gap-2.5 flex'>
                                <div class='self-stretch justify-center items-start inline-flex'>
                                    <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                        <div class='text-neutral-400 text-base font-semibold font-poppins'>
                                            Nama
                                        </div>
                                    </div>
                                    <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                        <div class='text-neutral-400 text-base font-semibold font-poppins'>
                                            Situs Wisata
                                        </div>
                                    </div>
                                    <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                        <div class='text-neutral-400 text-base font-semibold font-poppins'>
                                            Tanggal Tiket
                                        </div>
                                    </div>
                                    <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                        <div class='text-neutral-400 text-base font-semibold font-poppins'>
                                            User Account
                                        </div>
                                    </div>
                                </div>
                                <div class='self-stretch h-[228px] flex-col justify-start items-start gap-2.5 flex'>
                                    <div class='self-stretch justify-center items-start inline-flex'>
                                        <div class='grow shrink basis-0 h-6 justify-start items-center gap-2.5 flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                Steven Soewignjo
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                Situs Lokasi 1
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                28 Nov 2023
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-red-700 text-base font-semibold font-poppins'>
                                                Steven Soewignjo
                                            </div>
                                        </div>
                                    </div>
                                    <div class='self-stretch justify-center items-start inline-flex'>
                                        <div class='grow shrink basis-0 h-6 justify-start items-center gap-2.5 flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                Raihan
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                Situs Lokasi 1
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                28 Nov 2023
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-red-700 text-base font-semibold font-poppins'>
                                                Steven Soewignjo
                                            </div>
                                        </div>
                                    </div>
                                    <div class='self-stretch justify-center items-start inline-flex'>
                                        <div class='grow shrink basis-0 h-6 justify-start items-center gap-2.5 flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                Athaya
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                Situs Lokasi 1
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                28 Nov 2023
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-red-700 text-base font-semibold font-poppins'>
                                                Steven Soewignjo
                                            </div>
                                        </div>
                                    </div>
                                    <div class='self-stretch justify-center items-start inline-flex'>
                                        <div class='grow shrink basis-0 h-6 justify-start items-center gap-2.5 flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                Ammar
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                Situs Lokasi 1
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                28 Nov 2023
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-red-700 text-base font-semibold font-poppins'>
                                                Steven Soewignjo
                                            </div>
                                        </div>
                                    </div>
                                    <div class='self-stretch justify-center items-start inline-flex'>
                                        <div class='grow shrink basis-0 h-6 justify-start items-center gap-2.5 flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                Annisa
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                Situs Lokasi 1
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                28 Nov 2023
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-red-700 text-base font-semibold font-poppins'>
                                                Steven Soewignjo
                                            </div>
                                        </div>
                                    </div>
                                    <div class='self-stretch justify-center items-start inline-flex'>
                                        <div class='grow shrink basis-0 h-6 justify-start items-center gap-2.5 flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                John
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                Situs Lokasi 1
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                28 Nov 2023
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-red-700 text-base font-semibold font-poppins'>
                                                Steven Soewignjo
                                            </div>
                                        </div>
                                    </div>
                                    <div class='self-stretch justify-center items-start inline-flex'>
                                        <div class='grow shrink basis-0 h-6 justify-start items-center gap-2.5 flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                Dale
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                Situs Lokasi 1
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-zinc-800 text-base font-semibold font-poppins'>
                                                28 Nov 2023
                                            </div>
                                        </div>
                                        <div class='grow shrink basis-0 h-6 justify-between items-center flex'>
                                            <div class='text-red-700 text-base font-semibold font-poppins'>
                                                Steven Soewignjo
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
