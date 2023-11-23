import React, { useState } from 'react';
import "./style.css";
import { Wheel } from 'react-custom-roulette';

export default function Dice() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);


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
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };


  return (
    <>
      <button className="buttonspin"onClick={handleSpinClick}>Spin the wheel ! </button>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
    </>
  );
}