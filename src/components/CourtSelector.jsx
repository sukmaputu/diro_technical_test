import React, { useState, useEffect } from 'react';
import './CourtSelector.css';

const CourtSelector = ({ selectedDate, selectedTimeslot, onCourtSelect }) => {
  const [availableCourts, setAvailableCourts] = useState([]);
  const [selectedCourt, setSelectedCourt] = useState(null);

 
  const dummyCourtData = {
    '2025-10-6_09:00 AM': [
      {
        id: 1,
        name: 'Lapangan Banteng',
        isAvailable: true,
        imageUrl: 'https://tugujatim.id/wp-content/uploads/2025/01/345367f3-a23c-4a33-a023-d1482c55888b-1.jpg',
        description: 'Lapangan standar dengan permukaan karpet hijau. Cocok untuk pertandingan santai.'
      },
      {
        id: 2,
        name: 'Lapangan Juanda (Reserved)',
        isAvailable: false,
        imageUrl: 'https://saraga.id/blog/wp-content/uploads/2024/07/3-1024x768.jpeg',
        description: 'Lapangan premium dengan pencahayaan LED. Sering digunakan untuk turnamen.'
      },
      {
        id: 3,
        name: 'Lapangan Merah',
        isAvailable: true,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRxyXaqS2dExBH72DUwJKHrgj-NcgNUN5TA&s',
        description: 'Lapangan outdoor dengan pemandangan kota. Ideal untuk bermain di sore hari.'
      },
      { 
        id: 4,
        name: 'Lapangan Bakti',
        isAvailable: true,
        imageUrl: 'https://sapabima.id/wp-content/uploads/2023/09/39.jpg',
        description: 'Lapangan serbaguna dengan jaring yang bisa diatur untuk berbagai olahraga.'
      },
      { 
        id: 5,
        name: 'Lapangan Ayam',
        isAvailable: false,
        imageUrl: 'https://gelora-public-storage.s3-ap-southeast-1.amazonaws.com/upload/public-20240122041719.jpg',
        description: 'Lapangan indoor dengan pendingin udara, cocok untuk cuaca panas.'
      },
      { 
        id: 6,
        name: 'Lapangan Citra',
        isAvailable: true,
        imageUrl: 'https://trumecs.com/timthumb?h=600&src=http://trumecs.com/public/image/artikel/6306e798498da.jpg',
        description: 'Lapangan dengan kualitas permukaan terbaik, sering digunakan oleh profesional.'
      },
    ],
    '2025-10-6_08:00 AM': [
      {
        id: 1,
        name: 'Lapangan Banteng',
        isAvailable: true,
        imageUrl: 'https://tugujatim.id/wp-content/uploads/2025/01/345367f3-a23c-4a33-a023-d1482c55888b-1.jpg',
        description: 'Lapangan standar dengan permukaan karpet hijau. Cocok untuk pertandingan santai.'
      },
      {
        id: 2,
        name: 'Lapangan Juanda',
        isAvailable: true,
        imageUrl: 'https://saraga.id/blog/wp-content/uploads/2024/07/3-1024x768.jpeg',
        description: 'Lapangan premium dengan pencahayaan LED. Sering digunakan untuk turnamen.'
      },
      {
        id: 3,
        name: 'Lapangan Merah(Reserved)',
        isAvailable: false,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRxyXaqS2dExBH72DUwJKHrgj-NcgNUN5TA&s',
        description: 'Lapangan outdoor dengan pemandangan kota. Ideal untuk bermain di sore hari.'
      },
      {
        id: 4,
        name: 'Lapangan Bakti (Booked)',
        isAvailable: false,
        imageUrl: 'https://sapabima.id/wp-content/uploads/2023/09/39.jpg',
        description: 'Lapangan serbaguna dengan jaring yang bisa diatur untuk berbagai olahraga.'
      },
      {
        id: 5,
        name: 'Lapangan Ayam',
        isAvailable: true,
        imageUrl: 'https://gelora-public-storage.s3-ap-southeast-1.amazonaws.com/upload/public-20240122041719.jpg',
        description: 'Lapangan indoor dengan pendingin udara, cocok untuk cuaca panas.'
      },
      {
        id: 6,
        name: 'Lapangan Citra',
        isAvailable: true,
        imageUrl: 'https://trumecs.com/timthumb?h=600&src=http://trumecs.com/public/image/artikel/6306e798498da.jpg',
        description: 'Lapangan dengan kualitas permukaan terbaik, sering digunakan oleh profesional.'
      },
    ],
    'default': [
      {
        id: 1,
        name: 'Lapangan Banteng',
        isAvailable: true,
        imageUrl: 'https://tugujatim.id/wp-content/uploads/2025/01/345367f3-a23c-4a33-a023-d1482c55888b-1.jpg',
        description: 'Lapangan standar dengan permukaan karpet hijau. Cocok untuk pertandingan santai.'
      },
      {
        id: 2,
        name: 'Lapangan Juanda',
        isAvailable: true,
        imageUrl: 'https://saraga.id/blog/wp-content/uploads/2024/07/3-1024x768.jpeg',
        description: 'Lapangan premium dengan pencahayaan LED. Sering digunakan untuk turnamen.'
      },
      {
        id: 3,
        name: 'Lapangan Merah',
        isAvailable: true,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRxyXaqS2dExBH72DUwJKHrgj-NcgNUN5TA&s',
        description: 'Lapangan outdoor dengan pemandangan kota. Ideal untuk bermain di sore hari.'
      },
      {
        id: 4,
        name: 'Lapangan Bakti',
        isAvailable: true,
        imageUrl: 'https://sapabima.id/wp-content/uploads/2023/09/39.jpg',
        description: 'Lapangan serbaguna dengan jaring yang bisa diatur untuk berbagai olahraga.'
      },
      {
        id: 5,
        name: 'Lapangan Ayam',
        isAvailable: true,
        imageUrl: 'https://gelora-public-storage.s3-ap-southeast-1.amazonaws.com/upload/public-20240122041719.jpg',
        description: 'Lapangan indoor dengan pendingin udara, cocok untuk cuaca panas.'
      },
      {
        id: 6,
        name: 'Lapangan Citra',
        isAvailable: true,
        imageUrl: 'https://trumecs.com/timthumb?h=600&src=http://trumecs.com/public/image/artikel/6306e798498da.jpg',
        description: 'Lapangan dengan kualitas permukaan terbaik, sering digunakan oleh profesional.'
      },
    ]
  };

  useEffect(() => {
    if (selectedDate && selectedTimeslot) {
      const month = selectedDate.getMonth(); 
      const dateKey = `${selectedDate.getFullYear()}-${month}-${selectedDate.getDate()}_${selectedTimeslot}`;
      setAvailableCourts(dummyCourtData[dateKey] || dummyCourtData['default']);
      setSelectedCourt(null);
    } else {
      setAvailableCourts([]);
      setSelectedCourt(null);
    }
  }, [selectedDate, selectedTimeslot]);

  const handleCourtClick = (court) => {
    if (court.isAvailable) {
      setSelectedCourt(court.id);
      onCourtSelect(court);
    }
  };

  if (!selectedDate || !selectedTimeslot) {
    return (
      <div className="court-selector-container">
        <h3>Pilih Lapangan:</h3>
        <p>Mohon pilih tanggal dan jam terlebih dahulu.</p>
      </div>
    );
  }

  return (
    <div className="court-selector-container">
      <h3>Pilih Lapangan yang tersedia:</h3>
      <div className="court-grid">
        {availableCourts.length > 0 ? (
          availableCourts.map((court) => (
            <div
              key={court.id}
              className={`court-card
                ${court.isAvailable ? '' : 'unavailable'}
                ${selectedCourt === court.id ? 'selected' : ''}`
              }
              onClick={() => handleCourtClick(court)}
            >
              <img src={court.imageUrl} alt={court.name} className="court-image" />
              <div className="court-info">
                <h4>{court.name}</h4>
                <p>{court.description}</p>
              </div>
              {!court.isAvailable && <div className="unavailable-overlay">Reserved</div>}
            </div>
          ))
        ) : (
          <p>Tidak ada lapangan tersedia untuk tanggal dan jam ini.</p>
        )}
      </div>
    </div>
  );
};

export default CourtSelector;