// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import DateInput from './components/DateInput';
import CustomizationOptions from './components/CustomizationOptions';
import PosterGeneration from './components/PosterGeneration';
import PosterPreview from './components/PosterPreview';
import './App.css';

function App() {
  const [specialDate, setSpecialDate] = useState('');
  const [customization, setCustomization] = useState({
    location: '',
    backgroundColor: '#ffffff',
    message: '',
    fontStyle: 'Arial',
    border: false,
  });

  const handleDateChange = (date) => {
    setSpecialDate(date);
  };

  const handleCustomizationChange = (field, value) => {
    setCustomization({ ...customization, [field]: value });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <DateInput onDateChange={handleDateChange} />
        <CustomizationOptions onChange={handleCustomizationChange} />
        <PosterGeneration specialDate={specialDate} customization={customization} />
        <PosterPreview specialDate={specialDate} customization={customization} />
      </main>
    </div>
  );
}

export default App;
