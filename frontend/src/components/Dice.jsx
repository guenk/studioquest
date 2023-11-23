import React, { useState, useEffect } from 'react';
import "./style.css";
import { Wheel } from 'react-custom-roulette';

export default function Dice() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [buttonText, setButtonText] = useState('Spin the wheel!');

  const data = [
    { option: 'Logo/Colors', style: { backgroundColor: 'orange', textColor: 'black' } },
    { option: 'Technology', style: { backgroundColor: 'lightblue' }, textColor: 'black'},
    { option: 'You win 2 tokens', style: { backgroundColor: 'lightgreen', textColor: 'black' } },
    { option: 'Logo/Colors', style: { backgroundColor: 'orange', textColor: 'black' } },
    { option: 'Technology', style: { backgroundColor: 'lightblue', textColor: 'black' } },
    { option: 'History', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: 'Technology', style: { backgroundColor: 'lightblue', textColor: 'black' } },
    { option: 'Choose your topic', style: { backgroundColor: 'lightgreen', textColor: 'black' } },
    { option: 'History', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: 'Logo/Colors', style: { backgroundColor: 'orange', textColor: 'black' } },
    { option: 'Technology', style: { backgroundColor: 'lightblue', textColor: 'black' } },
    { option: 'History', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: 'Technology', style: { backgroundColor: 'lightblue', textColor: 'black' } },
    { option: 'History', style: { backgroundColor: 'red', textColor: 'black' } },
  ];

  const handleSpinClick = () => {
    if (!isSpinning && !mustSpin) {
      setIsSpinning(true);
      setMustSpin(true);
      const randomIndex = Math.floor(Math.random() * data.length);
      setPrizeNumber(randomIndex);
      setButtonText('Spinning...');
    }
  };

  const handleSpinComplete = () => {
    setIsSpinning(false);
    resetMustSpin();
  };

  const resetMustSpin = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300)); // Temporisation de 100 ms
    setMustSpin(false);
    setButtonText('Spin the wheel!');
  };

  return (
    <>
      <button className="buttonspin" onClick={handleSpinClick} disabled={isSpinning}>
        {buttonText}
      </button>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber !== null ? prizeNumber : 0}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['black']}
        onComplete={handleSpinComplete}
      />
    </>
  );
}