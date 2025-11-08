import React, { useState, useEffect } from 'react';
import Calendar from './components/Calendar';
import TimeslotSelector from './components/TimeSlotSelector';
import CourtSelector from './components/CourtSelector';
import ReservationSummary from './components/ReservationSummary';
import PaymentGateway from './components/PaymentGateway';
import BackToTopButton from './components/BackToTopButton';
import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeslot, setSelectedTimeslot] = useState(null);
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [isReservationConfirmed, setIsReservationConfirmed] = useState(false);
  const [showPaymentGateway, setShowPaymentGateway] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);

  const [showIntroAnimation, setShowIntroAnimation] = useState(true); 

  const reservationAmount = 50000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntroAnimation(false);
    }, 4000);

    return () => clearTimeout(timer); 
  }, []);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    setSelectedTimeslot(null);
    setSelectedCourt(null);
    setIsReservationConfirmed(false);
    setShowPaymentGateway(false);
    setPaymentDetails(null);
    console.log('Tanggal yang dipilih di App:', date);
  };

  const handleTimeslotSelection = (timeslot) => {
    setSelectedTimeslot(timeslot);
    setSelectedCourt(null);
    setIsReservationConfirmed(false);
    setShowPaymentGateway(false);
    setPaymentDetails(null);
    console.log('Timeslot yang dipilih di App:', timeslot);
  };

  const handleCourtSelection = (court) => {
    setSelectedCourt(court);
    setIsReservationConfirmed(false);
    setShowPaymentGateway(false);
    setPaymentDetails(null);
    console.log('Lapangan yang dipilih di App:', court);
  };

  const handleProceedToPayment = () => {
    setShowPaymentGateway(true);
  };

  const handlePaymentSuccess = (transactionId) => {
    setPaymentDetails({ status: 'Success', transactionId });
    setIsReservationConfirmed(true);
    setShowPaymentGateway(false);
    console.log('Pembayaran berhasil:', transactionId);
  };

  const handlePaymentError = (errorMessage) => {
    setPaymentDetails({ status: 'Failed', errorMessage });
    console.log('Pembayaran gagal:', errorMessage);
    alert(`Payment failed: ${errorMessage}. Please try again.`);
  };

  return (
    <div className="App"> {}
      {showIntroAnimation && (
        <div className="intro-animation-overlay">
          <div className="intro-content">
            <h1>Welcome to Badminton Booking!</h1>
            <p>Get ready to reserve your court.</p>
            {}
            <div className="loader"> {}
              <div>
                <ul>
                  <li>
                    <svg fill="currentColor" viewBox="0 0 90 120">
                      <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                    </svg>
                  </li>
                  <li>
                    <svg fill="currentColor" viewBox="0 0 90 120">
                      <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                    </svg>
                  </li>
                  <li>
                    <svg fill="currentColor" viewBox="0 0 90 120">
                      <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                    </svg>
                  </li>
                  <li>
                    <svg fill="currentColor" viewBox="0 0 90 120">
                      <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                    </svg>
                  </li>
                </ul>
              </div>
              <span>Loading</span>
            </div>
          </div>
        </div>
      )}

      {!showIntroAnimation && (
        <> {}
          <h1>Badminton Reservation App</h1>
          <div className="reservation-flow">
            <Calendar onDateSelect={handleDateSelection} />

            {selectedDate && (
              <TimeslotSelector
                selectedDate={selectedDate}
                onTimeslotSelect={handleTimeslotSelection}
              />
            )}

            {selectedDate && selectedTimeslot && (
              <CourtSelector
                selectedDate={selectedDate}
                selectedTimeslot={selectedTimeslot}
                onCourtSelect={handleCourtSelection}
              />
            )}

            {selectedDate && selectedTimeslot && selectedCourt && !showPaymentGateway && !isReservationConfirmed && (
              <div className="summary-and-payment-trigger">
                <ReservationSummary
                  selectedDate={selectedDate}
                  selectedTimeslot={selectedTimeslot}
                  selectedCourt={selectedCourt}
                  onConfirmReservation={handleProceedToPayment}
                />
                <button className="confirm-button" onClick={handleProceedToPayment}><span>Proceed to Payment (Rp {reservationAmount.toLocaleString('id-ID')})</span></button>
              </div>
            )}

            {selectedDate && selectedTimeslot && selectedCourt && showPaymentGateway && !isReservationConfirmed && (
              <PaymentGateway
                amount={reservationAmount}
                onPaymentSuccess={handlePaymentSuccess}
                onPaymentError={handlePaymentError}
              />
            )}

            {isReservationConfirmed && paymentDetails?.status === 'Success' && (
              <div className="success-message-global">
                <h2>🎉 Thank You! Your Reservation is Confirmed! 🎉</h2>
                <p>You have successfully booked {selectedCourt?.name} on {selectedDate?.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} at {selectedTimeslot}.</p>
                <p>Transaction ID: <strong>{paymentDetails.transactionId}</strong></p>
                <p>We look forward to seeing you!</p>
                <button onClick={() => {
                  setSelectedDate(null);
                  setSelectedTimeslot(null);
                  setSelectedCourt(null);
                  setIsReservationConfirmed(false);
                  setShowPaymentGateway(false);
                  setPaymentDetails(null);
                }} className="reset-button">Make Another Reservation</button>
              </div>
            )}
          </div>
        </>
      )}

      {}
      <BackToTopButton />
    </div>
  );
}

export default App;