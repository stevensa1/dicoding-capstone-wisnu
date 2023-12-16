import React from 'react';
import Sidebar from '../../components/Sidebar';
import NavigationBar from '../../components/NavigationBar';
import CustomBox from '../../components/CustomBox';

const kelolaUlasanStyles = {
    flexContainer: {
        display: 'flex',
        height: '100%',
    },
    contentContainer: {
        width: '100%',
        padding: '20px',
        backgroundColor: '#FFEBE6',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        gap: '20px',
    },
    infoBox: {
        backgroundColor: '#FFF',
        padding: '15px',
        borderRadius: '8px',
        flex: '1',
    },
    infoTitle: {
        fontSize: '18px',
        marginBottom: '8px',
        marginRight: '100px',
        width: '150px', // Atur lebar sesuai kebutuhan Anda
    },
    infoValue: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        margin: '0',
    },
    buatAksesContainer: {
        display: 'flex',
        flexDirection: 'column', // Mengubah menjadi tata letak kolom
        backgroundColor: '#FFF',
        padding: '15px',
        borderRadius: '8px',
        marginTop: '20px',
    },
    inputLabel: {
        fontSize: '18px',
        marginBottom: '8px',
        marginRight: '10px',
    },
    inputBox: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        marginBottom: '15px',
        boxSizing: 'border-box',
    },
    submitButton: {
        backgroundColor: '#FF4500',
        color: '#FFF',
        padding: '10px 20px',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

function KelolaUlasan() {
    return (
        <>
            <div style={kelolaUlasanStyles.flexContainer}>
                <Sidebar activeMenu='Kelola Ulasan' />
                <div style={kelolaUlasanStyles.contentContainer}>
                    <NavigationBar activeMenu='Kelola Ulasan' />

                    {/* CustomBox untuk Kelola Ulasan Situs Wisata */}
                    <CustomBox title='Kelola Ulasan Situs Wisata'>
                        <div className='flex flex-col md:flex-row justify-between items-center gap-8 w-full'>
                            <div className='flex flex-col w-full gap-2'>
                                <h3 className='text-lg'>Jumlah Akun</h3>
                                <p className='font-bold text-2xl'>100</p>
                            </div>
                            <div className='flex flex-col w-full gap-2'>
                                <h3 className='text-lg'>Akun Aktif</h3>
                                <p className='font-bold text-2xl'>100</p>
                            </div>
                            <div className='flex flex-col w-full gap-2'>
                                <h3 className='text-lg'>Akun Nonaktif</h3>
                                <p className='font-bold text-2xl'>100</p>
                            </div>
                            <div className='flex flex-col w-full gap-2'>
                                <h3 className='text-lg'>Batas Akun</h3>
                                <p className='font-bold text-2xl'>100</p>
                            </div>
                        </div>
                    </CustomBox>

                    {/* CustomBox untuk Buat Akses Baru */}
                    <CustomBox
                        title='Buat Akses Baru'
                        style={kelolaUlasanStyles.buatAksesContainer}
                    >
                        <div
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <label style={kelolaUlasanStyles.inputLabel}>
                                Nama Lengkap:
                            </label>
                            <input
                                type='text'
                                style={kelolaUlasanStyles.inputBox}
                            />

                            <label style={kelolaUlasanStyles.inputLabel}>
                                Alamat Email:
                            </label>
                            <input
                                type='email'
                                style={kelolaUlasanStyles.inputBox}
                            />

                            <label style={kelolaUlasanStyles.inputLabel}>
                                Nomor Handphone:
                            </label>
                            <input
                                type='tel'
                                style={kelolaUlasanStyles.inputBox}
                            />

                            <label style={kelolaUlasanStyles.inputLabel}>
                                Posisi Jabatan:
                            </label>
                            <input
                                type='text'
                                style={kelolaUlasanStyles.inputBox}
                            />
                        </div>

                        <button style={kelolaUlasanStyles.submitButton}>
                            Buat Akun
                        </button>
                    </CustomBox>
                </div>
            </div>
        </>
    );
}

export default KelolaUlasan;
