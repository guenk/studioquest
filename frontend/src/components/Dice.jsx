import React, { useState } from 'react';
import "./style.css";
import { Wheel } from 'react-custom-roulette';

export default function Dice() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false); // Nouvel état pour le numéro du prix

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
    if (!isSpinning) {
      // Si la roue ne tourne pas déjà
      setIsSpinning(true); // Indique que la roue commence à tourner
      setMustSpin(true);

      // Logique pour déterminer aléatoirement le prix sélectionné
      const randomIndex = Math.floor(Math.random() * data.length);
      setPrizeNumber(randomIndex);
    }
  };

  const handleSpinComplete = () => {
    // Réinitialisation une fois la rotation terminée
    setIsSpinning(false);
    setMustSpin(false);
  };

  return (
    <>
      <button className="buttonspin" onClick={handleSpinClick} disabled={isSpinning}>
        {isSpinning ? 'Spinning...' : 'Spin the wheel !'}
      </button>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber !== null ? prizeNumber : 0}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
        onComplete={handleSpinComplete}
      />
    </>
  );
}