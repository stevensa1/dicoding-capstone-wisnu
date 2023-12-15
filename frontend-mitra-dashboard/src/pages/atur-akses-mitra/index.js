import React from 'react';
import Sidebar from '../../components/Sidebar';
import NavigationBar from '../../components/NavigationBar';
import CustomBox from '../../components/CustomBox';

const AturAksesMitraStyles = {
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
      flexDirection: 'column',  // Mengubah menjadi tata letak kolom
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
      width: '400px',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      marginBottom: '15px',
      boxSizing: 'border-box',
      border: '1px solid #000',
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
  
  function AturAksesMitra() {
    return (
      <>
        <div style={AturAksesMitraStyles.flexContainer}>
          <Sidebar activeMenu='Atur Akses Mitra' />
          <div style={AturAksesMitraStyles.contentContainer}>
            <NavigationBar activeMenu='Atur Akses Mitra' />
  
            {/* CustomBox untuk Kelola Ulasan Situs Wisata */}
            <CustomBox title='Angka Akses Mitra'>
              <div style={AturAksesMitraStyles.flexContainer}>
                <div style={AturAksesMitraStyles.infoBox}>
                  <h3 style={AturAksesMitraStyles.infoTitle}>Jumlah Akun</h3>
                  <p style={AturAksesMitraStyles.infoValue}>100</p>
                </div>
                <div style={AturAksesMitraStyles.infoBox}>
                  <h3 style={AturAksesMitraStyles.infoTitle}>Akun Aktif</h3>
                  <p style={AturAksesMitraStyles.infoValue}>80</p>
                </div>
                <div style={AturAksesMitraStyles.infoBox}>
                  <h3 style={AturAksesMitraStyles.infoTitle}>Akun Nonaktif</h3>
                  <p style={AturAksesMitraStyles.infoValue}>20</p>
                </div>
                <div style={AturAksesMitraStyles.infoBox}>
                  <h3 style={AturAksesMitraStyles.infoTitle}>Batas Akun</h3>
                  <p style={AturAksesMitraStyles.infoValue}>150</p>
                </div>
              </div>
            </CustomBox>
  
            {/* CustomBox untuk Buat Akses Baru */}
            <CustomBox title='Buat Akses Baru' style={AturAksesMitraStyles.buatAksesContainer}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={AturAksesMitraStyles.inputLabel}>Nama Lengkap:</label>
                <input type="text" style={AturAksesMitraStyles.inputBox} />
                
                <label style={AturAksesMitraStyles.inputLabel}>Alamat Email:</label>
                <input type="email" style={AturAksesMitraStyles.inputBox} />
                
                <label style={AturAksesMitraStyles.inputLabel}>Nomor Handphone:</label>
                <input type="tel" style={AturAksesMitraStyles.inputBox} />
                
                <label style={AturAksesMitraStyles.inputLabel}>Posisi Jabatan:</label>
                <select style={AturAksesMitraStyles.inputBox}>
                <option value="jabatan1">Jabatan 1</option>
                <option value="jabatan2">Jabatan 2</option>
                <option value="jabatan3">Jabatan 3</option>
                {/* Tambahkan opsi jabatan sesuai kebutuhan */}
                </select>

                {/* Tombol "Buat Akun" ditempatkan di bawah label "Posisi Jabatan" */}
                <button style={AturAksesMitraStyles.submitButton}>Buat Akun</button>
            </div>
            </CustomBox>

          </div>
        </div>
      </>
    );
  }
  
  export default AturAksesMitra;

