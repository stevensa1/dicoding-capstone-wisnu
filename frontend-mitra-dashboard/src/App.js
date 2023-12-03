import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import AturAksesMitra from './pages/atur-akses-mitra';
import AnalitikaDanStatistika from './pages/analitika-dan-statistika';
import KelolaSitusWisata from './pages/kelola-situs-wisata';
import KelolaTiket from './pages/kelola-tiket';
import KelolaUlasan from './pages/kelola-ulasan';
import PesanDanNotifikasi from './pages/pesan-dan-notifikasi';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />} />
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
