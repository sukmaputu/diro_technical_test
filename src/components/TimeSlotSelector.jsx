import React, { useState, useEffect } from 'react';
import './TimeslotSelector.css'; 

const TimeslotSelector = ({ selectedDate, onTimeslotSelect }) => {
  const [availableTimeslots, setAvailableTimeslots] = useState([]);
  const [selectedTimeslot, setSelectedTimeslot] = useState(null);

  const dummyTimeslotData = {
    '2025-10-6': [ 
      { time: '08:00 AM', isAvailable: true },
      { time: '09:00 AM', isAvailable: true },
      { time: '10:00 AM', isAvailable: false }, 
      { time: '11:00 AM', isAvailable: true },
      { time: '12:00 PM', isAvailable: true },
      { time: '01:00 PM', isAvailable: false },
      { time: '02:00 PM', isAvailable: true },
    ],
    'default': [
      { time: '08:00 AM', isAvailable: true },
      { time: '09:00 AM', isAvailable: true },
      { time: '10:00 AM', isAvailable: true },
      { time: '11:00 AM', isAvailable: true },
      { time: '12:00 PM', isAvailable: true },
      { time: '01:00 PM', isAvailable: true },
      { time: '02:00 PM', isAvailable: true },
    ]
  };

  useEffect(() => {
    if (selectedDate) {
      const dateKey = `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`;
      setAvailableTimeslots(dummyTimeslotData[dateKey] || dummyTimeslotData['default']);
      setSelectedTimeslot(null); 
    } else {
      setAvailableTimeslots([]);
      setSelectedTimeslot(null);
    }
  }, [selectedDate]); 

  const handleTimeslotClick = (timeslot) => {
    if (timeslot.isAvailable) {
      setSelectedTimeslot(timeslot.time);
      onTimeslotSelect(timeslot.time); 
    }
  };

  if (!selectedDate) {
    return (
      <div className="timeslot-selector-container">
        <h3>Select a Timeslot:</h3>
        <p>Please select a date first.</p>
      </div>
    );
  }

  return (
    <div className="timeslot-selector-container">
      <h3>Select an available Timeslot (for {selectedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}):</h3>
      <div className="timeslot-grid">
        {availableTimeslots.length > 0 ? (
          availableTimeslots.map((timeslot, index) => (
            <button
              key={index}
              className={`timeslot-button 
                ${timeslot.isAvailable ? '' : 'unavailable'} 
                ${selectedTimeslot === timeslot.time ? 'selected' : ''}`
              }
              onClick={() => handleTimeslotClick(timeslot)}
              disabled={!timeslot.isAvailable}
            >
              {timeslot.time}
            </button>
          ))
        ) : (
          <p>No timeslots available for this date.</p>
        )}
      </div>
    </div>
  );
};

export default TimeslotSelector;