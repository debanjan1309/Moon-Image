// MoonPhaseCalculator.js
import React, { useEffect } from 'react';

const MoonPhaseCalculator = () => {
  useEffect(() => {
    start();
  }, []);

  const start = () => {
    fillYearCombo();
    fillMonthCombo();
    fillDayCombo();
    getAge();
  };

  const fillYearCombo = () => {
    const curYear = new Date().getFullYear();
    const yearCombo = document.getElementById("cmbYears");
    for (let i = 1900; i <= curYear; i++) {
      const optYear = new Option(i, i);
      yearCombo.add(optYear, undefined);
    }
    yearCombo.value = curYear;
  };

  const fillMonthCombo = () => {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const monthCombo = document.getElementById("cmbMonths");
    for (let i = 0; i < months.length; i++) {
      const optMonth = new Option(months[i], i+1);
      monthCombo.add(optMonth, undefined);
    }
  };

  const fillDayCombo = () => {
    const n = 31; // Default number of days
    const dayCombo = document.getElementById("cmbDays");
    for (let i = 1; i <= n; i++) {
      const optDay = new Option(i, i);
      dayCombo.add(optDay, undefined);
    }
    const curDate = new Date();
    const d = curDate.getDate();
    dayCombo.value = d;
  };

  const testLeap = () => {
    const y = parseInt(document.getElementById("cmbYears").value);
    let leap = false;
    if ((y % 4) === 0) {
      if ((y % 100) === 0 && (y % 400) !== 0)
        leap = false;
      else
        leap = true;
    } else
      leap = false;
    return leap;
  };

  const getDays = () => {
    const monthCombo = document.getElementById("cmbMonths");
    const m = parseInt(monthCombo.value);
    let n = 31;
    switch(m) {
      case 2:
        if (testLeap())
          n = 29;
        else
          n = 28;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        n = 30;
        break;
      default:
        n = 31;
    }
    const dayCombo = document.getElementById("cmbDays");
    dayCombo.options.length = 0;
    for (let i = 1; i <= n; i++) {
      const optDay = new Option(i, i);
      dayCombo.add(optDay, undefined);
    }
  };

  const februaryDays = () => {
    const leap = testLeap();
    const feb = leap ? 29 : 28;
    const monthCombo = document.getElementById("cmbMonths");
    if (parseInt(monthCombo.value) === 2) {
      const dayCombo = document.getElementById("cmbDays");
      dayCombo.options.length = 0;
      for (let i = 1; i <= feb; i++) {
        const optDay = new Option(i, i);
        dayCombo.add(optDay, undefined);
      }
    }
  };

  const moonage = (d, m, y) => {
    let ip, ag;
    const j = juliandate(d, m, y);
    ip = (j + 4.867) / 29.53059;
    ip = ip - Math.floor(ip);
    if(ip < 0.5)
      ag = ip * 29.53059 + 29.53059 / 2;
    else
      ag = ip * 29.53059 - 29.53059 / 2;
    ag = Math.floor(ag) + 1;
    return ag;
  };

  const juliandate = (d, m, y) => {
    let yy, mm, k1, k2, k3, j;
    yy = y - Math.floor((12 - m) / 10);
    mm = m + 9;
    if (mm >= 12)
      mm = mm - 12;
    k1 = Math.floor(365.25 * (yy + 4712));
    k2 = Math.floor(30.6001 * mm + 0.5);
    k3 = Math.floor(Math.floor((yy / 100) + 49) * 0.75) - 38;
    j = k1 + k2 + d + 59;
    if (j > 2299160)
      j = j - k3;
    return j;
  };

  const getAge = () => {
    const d = parseInt(document.getElementById("cmbDays").value);
    const m = parseInt(document.getElementById("cmbMonths").value);
    const y = parseInt(document.getElementById("cmbYears").value);
    const ag = moonage(d, m, y);
    const ageInput = document.getElementsByName("age")[0]; // Get the age input element by name
    if (ag === 1)
      ageInput.value = ag.toString() + " day"; // Update the value of the age input element
    else
      ageInput.value = ag.toString() + " days"; // Update the value of the age input element
    const imgName = "images/image" + ag.toString() + ".png";
    showMoonPhase(imgName);
  };
  

  const showMoonPhase = (imgFile) => {
    const moonImage = document.getElementById("MoonImage");
    if (moonImage) {
      moonImage.src = imgFile;
    } else {
      console.log("Moon image element not found.");
    }
  };
  

  return (
    <div>
      <h2>Moon phase</h2>
      <p>Select year:
        <select id="cmbYears" name="YearCombo" onChange={februaryDays}></select>
      </p>
      <p>Select month:
        <select id="cmbMonths" name="MonthCombo" onChange={getDays}></select>
      </p>
      <p>Select day:
        <select id="cmbDays" name="DayCombo"></select>
      </p>
      <p>Click button to get moon phase:
        <input name="moon" value="Moon phase" type="button" onClick={getAge}></input>
      </p>
      <p><b>Moon age:</b>
        <input name="age" readOnly size="10"></input>
      </p>
      <p><b>Moon phase:</b>
        <img id="MoonImage" name="MoonImage" src="images/image0.png"></img>
      </p>
    </div>
  );
};

export default MoonPhaseCalculator;
