import React from 'react';
import DataTable from 'react-data-table-component';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Sidebar from '../../components/Sidebar';
import NavigationBar from '../../components/NavigationBar';
import CustomBox from '../../components/CustomBox';

function Dashboard() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

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

    const ticketData = [
        {
            Nama: 'Steven Soewignjo',
            destination: 'Situs Lokasi 1',
            ticketDate: '28 Nov 2023',
            accountRefferer: 'Steven Soewignjo',
        },
        {
            Nama: 'Raihan',
            destination: 'Situs Lokasi 1',
            ticketDate: '28 Nov 2023',
            accountRefferer: 'Steven Soewignjo',
        },
        {
            Nama: 'Athaya',
            destination: 'Situs Lokasi 1',
            ticketDate: '28 Nov 2023',
            accountRefferer: 'Steven Soewignjo',
        },
        // ... Add more data as needed
    ];

    const columns = [
        {
            name: 'Nama',
            selector: (row) => row.Nama,
            sortable: true,
        },
        {
            name: 'Situs Wisata',
            selector: (row) => row.destination,
        },
        {
            name: 'Tanggal Tiket',
            selector: (row) => row.ticketDate,
            sortable: true,
        },
        {
            name: 'User Account',
            selector: (row) => row.accountRefferer,
            sortable: true,
        },
    ];

    const barChartOptions = {
        plugins: {
            title: {
                display: true,
                text: 'Kunjungan Vs Penjualan Tiket',
            },
        },
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    const barChartData = {
        labels: [
            '26 Nov 2023',
            '27 Nov 2023',
            '28 Nov 2023',
            '29 Nov 2023',
            '30 Nov 2023',
            '1 Des 2023',
            '2 Des 2023',
        ],
        datasets: [
            {
                label: 'Kunjungan',
                data: [12, 19, 3, 5, 2, 3, 1],
                backgroundColor: '#FF6384',
            },
            {
                label: 'Penjualan',
                data: [2, 3, 20, 5, 1, 4, 3],
                backgroundColor: '#36A2EB',
            },
        ],
    };

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
                <Sidebar activeMenu='Dashboard' />
                <div class='w-full p-6 bg-red-50 flex-col justify-start items-start gap-6 inline-flex'>
                    <NavigationBar activeMenu='Dashboard' />
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
                        <CustomBox title='Diagram Kunjungan Situs Wisata'>
                            <Bar
                                options={barChartOptions}
                                data={barChartData}
                            />
                        </CustomBox>
                        <CustomBox title='Pembeli Tiket Terbaru'>
                            {/* <table id='myTable'></table> */}
                            <DataTable columns={columns} data={ticketData} />
                        </CustomBox>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
