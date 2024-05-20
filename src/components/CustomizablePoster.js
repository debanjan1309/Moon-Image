// CustomizablePoster.js
import React, { useState , useReducer} from 'react';
import MoonPhaseCalculator from './MoonPhaseCalculator';
import PosterPreview from './PosterPreview'; // Assuming you'll create a separate component for the poster preview
const CustomizablePoster = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [location, setLocation] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [internationalDateStyle, setInternationalDateStyle] = useState(true);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
  };

  const handleDateStyleChange = (e) => {
    setInternationalDateStyle(e.target.value === 'true');
  };

  const generatePoster = () => {
    const posterData = {
      selectedDate,
      location,
      backgroundColor,
      internationalDateStyle,
    };
    console.log('Generated Poster:', posterData);
    // Further logic to generate the poster image
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PosterPreview selectedDate={selectedDate} backgroundColor={backgroundColor} />
        <div>
          {/* Other elements */}
        </div>
      </div>
    </div>
  );
};

export default CustomizablePoster;
