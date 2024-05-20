// CustomizationOptions.js
import React from 'react';

const CustomizationOptions = ({ onChange }) => {
  return (
    <div>
      <h2>Customization Options</h2>
      <label htmlFor="location">Location:</label>
      <input type="text" id="location" onChange={(e) => onChange('location', e.target.value)} />

      <label htmlFor="backgroundColor">Background Color:</label>
      <input type="color" id="backgroundColor" onChange={(e) => onChange('backgroundColor', e.target.value)} />

      <label htmlFor="message">Special Message:</label>
      <textarea id="message" onChange={(e) => onChange('message', e.target.value)}></textarea>

      <label htmlFor="fontStyle">Font Style:</label>
      <select id="fontStyle" onChange={(e) => onChange('fontStyle', e.target.value)}>
        <option value="Arial">Arial</option>
        <option value="Verdana">Verdana</option>
      </select>

      <label htmlFor="border">Add Border:</label>
      <input type="checkbox" id="border" onChange={(e) => onChange('border', e.target.checked)} />
    </div>
  );
};

export default CustomizationOptions;
