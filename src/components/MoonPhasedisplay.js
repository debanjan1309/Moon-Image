import React from 'react';
import PropTypes from 'prop-types';
//import './MoonPhaseDisplay.css'; 

const MoonPhaseDisplay = ({ imgFile }) => {
  return (
    <div className="moon-phase-display">
      <h3 className="moon-phase-display__title">Moon Phase</h3>
      <img src={imgFile} alt="Moon Phase" className="moon-phase-display__image" />
    </div>
  );
};

// PropTypes
MoonPhaseDisplay.propTypes = {
  imgFile: PropTypes.string.isRequired,
};

export default MoonPhaseDisplay;
