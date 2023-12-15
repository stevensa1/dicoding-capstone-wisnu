import React from 'react';
import Sidebar from '../../components/Sidebar';
import NavigationBar from '../../components/NavigationBar';
import CustomBox from '../../components/CustomBox';


const analitikaDanStatistikaStyles = {
  label: {
    fontSize: '18px',
    marginBottom: '8px',
    marginRight: '100px', // Adjust the margin as needed
    width: '150px', // Adjust the width as needed
  },
  value: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    margin: '0',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#FF4500',
    color: '#FFF',
    padding: '10px 20px',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

function AnalitikaDanStatistika() {
  return (
    <>
      <div className='flex h-full '>
        <Sidebar activeMenu='Analitika dan Statistika' />
        <div className='w-full p-6 bg-red-50 flex-col justify-start items-start gap-6 inline-flex'>
          <NavigationBar activeMenu='Analitika dan Statistika' />

          {/* Pratinjau Bulan Ini */}
          <CustomBox title='Pratinjau Bulan Ini'>
            <div className='flex gap-5'>
              <div>
                <label style={analitikaDanStatistikaStyles.label}>Total Penjualan</label>
                <p style={analitikaDanStatistikaStyles.value}>40.000.000,00</p>
              </div>
              <div>
                <label style={analitikaDanStatistikaStyles.label}>Total Tiket Dibuat</label>
                <p style={analitikaDanStatistikaStyles.value}>400</p>
              </div>
              <div>
                <label style={analitikaDanStatistikaStyles.label}>Total Impresi</label>
                <p style={analitikaDanStatistikaStyles.value}>30,23 JT</p>
              </div>
              <div>
                <label style={analitikaDanStatistikaStyles.label}>Konversi Pembelian</label>
                <p style={analitikaDanStatistikaStyles.value}>0.52</p>
              </div>
            </div>
          </CustomBox>

          {/* Pilih Bulan */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <CustomBox title='Pilih Bulan'>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={analitikaDanStatistikaStyles.label}>Pilih Periode Bulan</label>
                <input
                  type="month"
                  id="periodeBulan"
                  name="periodeBulan"
                  style={{ border: '1px solid black', padding: '5px', marginBottom: '10px' }}
                />
                 <button style={analitikaDanStatistikaStyles.button}>Submit</button>
              </div>
            </CustomBox>
          </div>

          {/* Rekapitulasi Laporan */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <CustomBox title='Rekapitulasi Laporan'>
              <div className='flex gap-4'>
                <label style={analitikaDanStatistikaStyles.label}>Jumlah Tiket Dibuat:</label>
                {/* Add your input for the number of tickets created here */}
                <label style={analitikaDanStatistikaStyles.label}>Total Penjualan:</label>
                {/* Add your input for the total sales here */}
                <label style={analitikaDanStatistikaStyles.label}>Jumlah Impresi:</label>
                {/* Add your input for the number of impressions here */}
                <label style={analitikaDanStatistikaStyles.label}>Konversi Pembelian:</label>
                {/* Add your input for the conversion rate here */}
              </div>
            </CustomBox>
          </div>

          {/* Unduh Laporan Periode Lain */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <CustomBox title='Unduh Laporan Periode Lain'>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={analitikaDanStatistikaStyles.label}>Pilih Periode Lain</label>
                <input
                  type="month"
                  id="periodeLain"
                  name="periodeLain"
                  style={{ border: '1px solid black', padding: '5px', marginBottom: '10px' }}
                />
                <button style={analitikaDanStatistikaStyles.button}>Unduh Laporan</button>
              </div>
            </CustomBox>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnalitikaDanStatistika;