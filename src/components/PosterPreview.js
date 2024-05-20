// PosterPreview.js
import React, { useRef, useEffect } from 'react';
import MoonPhaseCalculator from './MoonPhaseCalculator';

const PosterPreview = ({ specialDate, customization }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (specialDate && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // Clear previous drawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw moon image
      const moonImage = new Image();
      moonImage.src = `path_to_moon_image?date=${specialDate}`; // Replace path_to_moon_image with actual image path
      moonImage.onload = () => {
        ctx.drawImage(moonImage, 0, 0, canvas.width, canvas.height * (2 / 3)); // Adjust moon image size and position
        
        // Draw special message
        ctx.fillStyle = 'black'; // Example font color
        ctx.font = `${canvas.height / 15}px ${customization.fontStyle}`; // Adjust font size and style
        ctx.textAlign = 'center';
        ctx.fillText(customization.message, canvas.width / 2, canvas.height * (2 / 3) + 30); // Adjust message position
      };
    }
  }, [specialDate, customization]);

  return (
    <div>
      <h2>Poster Preview</h2>
      <canvas ref={canvasRef} width={400} height={300}></canvas> {/* Adjust canvas size as needed */}
      <MoonPhaseCalculator specialDate={specialDate} />
    </div>
  );
};

export default PosterPreview;
