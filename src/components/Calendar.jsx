import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css'; // Kita akan membuat file CSS ini nanti

const Calendar = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  return (
    <div className="calendar-container">
      <h3>Select a Date:</h3>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd MMMM yyyy"
        minDate={new Date()} 
        inline 
      />
      {selectedDate && (
        <p>You selected: {selectedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      )}
    </div>
  );
};

export default Calendar;