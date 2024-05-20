// DateInput.js
import React from 'react';

const DateInput = ({ onDateChange }) => {
  return (
    <div>
      <label htmlFor="specialDate">Enter Special Date:</label>
      <input type="date" id="specialDate" onChange={(e) => onDateChange(e.target.value)} />
    </div>
  );
};

export default DateInput;
