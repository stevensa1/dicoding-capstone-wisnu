import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import AturAksesMitra from './pages/atur-akses-mitra';
import AnalitikaDanStatistika from './pages/analitika-dan-statistika';
import KelolaSitusWisata from './pages/kelola-situs-wisata';
import KelolaTiket from './pages/kelola-tiket';
import KelolaUlasan from './pages/kelola-ulasan';
import PesanDanNotifikasi from './pages/pesan-dan-notifikasi';
import PengajuanMitra from './pages/pengajuan-mitra';
import LoginPage from './pages/login-page/index';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/login' replace />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/request/partner' element={<PengajuanMitra />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/manage/access' element={<AturAksesMitra />} />
                <Route
                    path='/statistics'
                    element={<AnalitikaDanStatistika />}
                />
                <Route
                    path='/manage/destination'
                    element={<KelolaSitusWisata />}
                />
                <Route path='/manage/ticket' element={<KelolaTiket />} />
                <Route path='/manage/feedback' element={<KelolaUlasan />} />
                <Route path='/notifications' element={<PesanDanNotifikasi />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
