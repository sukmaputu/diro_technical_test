import React, { useState } from 'react';
import './ReservationSummary.css'; 

const ReservationSummary = ({ selectedDate, selectedTimeslot, selectedCourt, onConfirmReservation }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsConfirmed(true);
      setIsLoading(false);
      onConfirmReservation(); 
      alert('Reservation confirmed successfully!');
    }, 1500); 
  };

  if (!selectedDate || !selectedTimeslot || !selectedCourt) {
    return (
      <div className="reservation-summary-container">
        <h3>Reservation Summary:</h3>
        <p>Please complete your date, timeslot, and court selection.</p>
      </div>
    );
  }

  return (
    <div className="reservation-summary-container">
      <h3>Reservation Summary:</h3>
      <div className="summary-details">
        <p><strong>Date:</strong> {selectedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        <p><strong>Timeslot:</strong> {selectedTimeslot}</p>
        <p><strong>Court:</strong> {selectedCourt.name}</p>
      </div>

          
      <button
        className="confirm-button"
        onClick={handleConfirmClick}
        disabled={isLoading || isConfirmed}
      >
        <span>
          {isLoading ? 'Confirming...' : isConfirmed ? 'Reservation Confirmed!' : 'Confirm Reservation'}
        </span>
      </button>


      {isConfirmed && (
        <p className="success-message">Your reservation has been successfully confirmed!</p>
      )}
    </div>
  );
};

export default ReservationSummary;