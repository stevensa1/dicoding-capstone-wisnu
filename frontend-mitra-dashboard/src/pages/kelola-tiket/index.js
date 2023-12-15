import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import NavigationBar from '../../components/NavigationBar';
import CustomBox from '../../components/CustomBox';

function KelolaTiket() {
    const [ticketInfo, setTicketInfo] = useState({
      location: '',
      ticketHolderName: '',
      ticketHolderAge: '',
      ticketDate: '',
      ticketAddress: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setTicketInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle the submission logic, e.g., send data to an API
      console.log('Submitted Ticket Info:', ticketInfo);
    };
  
    return (
      <>
        <div className='flex h-full'>
          <Sidebar activeMenu='Kelola Tiket' />
          <div className='w-full p-6 bg-red-50 flex-col justify-start items-start gap-6 inline-flex'>
            <NavigationBar activeMenu='Kelola Tiket' />
  
            {/* Tambahkan Tiket Section */}
            <CustomBox title='Tambahkan Tiket'>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className='input-box'>
                  <label htmlFor='location' style={{ display: 'block' }}>Lokasi/Situs Wisata:</label>
                  <input
                    type='text'
                    id='location'
                    name='location'
                    value={ticketInfo.location}
                    onChange={handleInputChange}
                    style={{ display: 'block', border: '1px solid black', padding: '5px', width: '400px' }}
                    required
                  />
                </div>
  
                <div className='input-box'>
                  <label htmlFor='ticketHolderName' style={{ display: 'block' }}>Nama Pemegang Tiket:</label>
                  <input
                    type='text'
                    id='ticketHolderName'
                    name='ticketHolderName'
                    value={ticketInfo.ticketHolderName}
                    onChange={handleInputChange}
                    style={{ display: 'block', border: '1px solid black', padding: '5px', width: '400px' }}
                    required
                  />
                </div>
  
                <div className='input-box'>
                  <label htmlFor='ticketHolderAge' style={{ display: 'block' }}>Umur Pemegang Tiket:</label>
                  <input
                    type='number'
                    id='ticketHolderAge'
                    name='ticketHolderAge'
                    value={ticketInfo.ticketHolderAge}
                    onChange={handleInputChange}
                    style={{ display: 'block', border: '1px solid black', padding: '5px', width: '400px' }}
                    required
                  />
                </div>
  
                <div className='input-box'>
                  <label htmlFor='ticketDate' style={{ display: 'block' }}>Tanggal Tiket:</label>
                  <input
                    type='date'
                    id='ticketDate'
                    name='ticketDate'
                    value={ticketInfo.ticketDate}
                    onChange={handleInputChange}
                    style={{ display: 'block', border: '1px solid black', padding: '5px', width: '400px' }}
                    required
                  />
                </div>
  
                <div className='input-box'>
                  <button type='submit' style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}>
                    Submit
                  </button>
                </div>
              </form>
            </CustomBox>
  
            {/* CustomBox for Additional Section */}
            <CustomBox title='Section Baru'>
              {/* Add content for the new section here */}
              <p>This is a new section.</p>
            </CustomBox>
          </div>
        </div>
      </>
    );
  }
  
  export default KelolaTiket;